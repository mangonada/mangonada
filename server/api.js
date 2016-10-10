/* eslint-disable */
const express = require('express');
const request = require('request-promise');

const router = express.Router();
const fs = require('fs');
const path = require('path');
const models = require('./models');

router.param('userName', (req, res, next, userLabel) => {
  req.user = userLabel;
  next();
});

router.param('repoName', (req, res, next, repoLabel) => {
  req.repo = repoLabel;
  next();
});

router.param('endpoint', (req, res, next, endpointLabel) => {
  req.endpoint = endpointLabel;
  next();
});

router.route('/repos/:userName/:repoName')
.all((req, res, next) => {
  const gitURL = `https://api.github.com/repos/${req.user}/${req.repo}`;
  const userAgent = 'cadeban';
  const secrets = 'client_id=423335fdf206466ccd3b&client_secret=bc10a999efc0335d06b6d84d470b76eda5a97b30';
  const summaryOpt = { uri: `${gitURL}?${secrets}`, headers: { 'User-Agent': userAgent } };

  request(summaryOpt).then((summary) => {
    const overview = JSON.parse(summary);
    req.user_repo = `${req.user}/${req.repo}`;
    req.repo_overview = overview;
    next();
  }).catch((error) => {
    res.status(401).json({error});
  });
})
 .get(
   (req, res, next) => {
     // mongo database middleware
     const query = { id : req.user_repo };
     models.GithubData.findOne(query, function success_or_fail(error, data) {
       if (error) {
         next();
       } else if (!data) {
         next();
       }
       if (data) {
         if (data.repo.pushed_at !== req.repo_overview.pushed_at) {
           models.GithubData.remove(query, function success_or_fail(remove_error, remove_data) {
             next();
           });
           return;
         } else {
           const packet = { id : data.user_repo,
                            repo : data.repo,
                            JSONBranches : data.branches,
                            JSONCommits : data.commits };
           const commitTable = {};
           const missingShaTable = {};
           data.commits.map((commit) => { commitTable[commit.sha] = commit; });
           data.commits.map((commit) => { commit.parents.map((parent) => {
             if (commitTable[parent.sha] === undefined) {
               missingShaTable[parent.sha] = parent.sha;
             }
           }); });
           console.log("mongo db has missing commit", Object.keys(missingShaTable));
           res.status(200).json(packet);
           return;
         }
       }
     });
   },
   (req, res) => {
     // github api
     const gitURL = `https://api.github.com/repos/${req.user}/${req.repo}`;
     const branchesURL = `${gitURL}/branches`;
     const commitsURL = `${gitURL}/commits`;
     const userAgent = 'cadeban';
     const secrets = 'client_id=423335fdf206466ccd3b&client_secret=bc10a999efc0335d06b6d84d470b76eda5a97b30';
     const branchOpt = { uri: `${branchesURL}?${secrets}`, headers: { 'User-Agent': userAgent } };

     /**
      * Requests list of all branches associated with a repository,
      * then requests all commits from each branch using Github API.
      */
     request(branchOpt)
     .then((branches) => {
       branches = JSON.parse(branches);
       const requestBranchCommits = [];
       const foundCommits = {}
       branches.reduce((encounteredBranch, branch) => {
         if (encounteredBranch[branch.commit.sha]) { return encounteredBranch; }
         requestBranchCommits.push(makeRequestBranchCommits(branch.commit.sha, foundCommits));
         encounteredBranch[branch.commit.sha] = true;
         return encounteredBranch;
       }, {});
       Promise.all(requestBranchCommits).then((allCommits) => {
         const requestAllCommits = { commits: [], lookup: {} };
         const allFlattenCommits = [].concat(...allCommits);

         /**
          * Sorts array of commits by timestamp
          */
         allFlattenCommits.sort((lhs, rhs) => {
           if (lhs.commit.committer.date !== rhs.commit.committer.date) {
             return new Date(lhs.commit.committer.date) - new Date(rhs.commit.committer.date)
           } else {
             return new Date(lhs.commit.author.date) - new Date(rhs.commit.author.date)
           }
         });

         /**
          * Filters array of commits to remove duplicates
          */
         allFlattenCommits.reduce((container, branchCommit) => {
           if (container.lookup[branchCommit.sha] === undefined) {
             container.lookup[branchCommit.sha] = true;
             container.commits.push(branchCommit);
           }
           return container;
         }, requestAllCommits);

         const jsonData = { id : req.user_repo,
                            repo :  req.repo_overview,
                            branches : branches,
                            commits : requestAllCommits.commits };

         models.GithubData.insertMany([jsonData], function success_or_fail(error, data) {

           if (error) {
             res.status(400).json({ message : "failed to insert", error });
             return;
           }

           const packet = { id : jsonData.id,
                            repo : jsonData.repo,
                            JSONBranches : jsonData.branches,
                            JSONCommits : jsonData.commits };
           res.status(200).json(packet);
           return;
         });
       }, (error) => {
         res.status(401).json({ message : 'noooooo', error });
         return;
       });

       /**
        * [makeRequestBranchCommits gets a branches' commits from github's api in quantities of 100,
        * if there are more commits to be retrieved,
        * run getNextCommits again until there are no more commits to retrieve]
        * @param  {[String]} lastSha [Sha # of most recent commit on the branch]
        * @return {[Promise]} [Returns a promise that contains a recursive invocation to Github Api]
        */
       function makeRequestBranchCommits(branchLastSha, foundShaLookup) {
         return new Promise((resolve, reject) => {
           function getNextCommits(lastSha, commitArr = [], ith = 1) {
             const commitsOpt = { uri: `${commitsURL}?sha=${lastSha}&per_page=100&${secrets}`,
                                  headers: { 'User-Agent': userAgent } };
             console.log("commit requests get", ith, commitsOpt.uri.split('&')[0]);
             request(commitsOpt).then((commits) => {
               const commitObjs = JSON.parse(commits);
               commitArr.push(...commitObjs);
               commitArr.sort((lhs, rhs) => {
                 if (lhs.commit.committer.date !== rhs.commit.committer.date) {
                   return new Date(lhs.commit.committer.date) - new Date(rhs.commit.committer.date)
                 } else {
                   return new Date(lhs.commit.author.date) - new Date(rhs.commit.author.date)
                 }
               });
               commitArr.filter((aCommit, seenCommits = {} ) => { 
                 if (seenCommits[aCommit.sha]) { return false; }
                 seenCommits[aCommit.sha] = true;
                 return true;
               });

               commitArr.map((aCommit) => { foundShaLookup[aCommit.sha] = true; });
               const commitMissingObjs = commitArr.reduce((missing, aCommit) => {
                 aCommit.parents.map((parent) => {
                   if (foundShaLookup[parent.sha] === undefined) {
                     foundShaLookup[parent.sha] = true;
                     missing.push(parent.sha);
                   }
                 });
                 return missing;
               }, []);
               console.log("commit requests missing", ith, commitMissingObjs.length, commitMissingObjs);

               if (commitMissingObjs.length === 0) {
                 console.log("commit requests done", ith, lastSha);
                 resolve(commitArr);
               } else {
                 getNextCommits(commitMissingObjs.slice(-1).pop(), commitArr, ith++);
               }
             });
           }
           getNextCommits(branchLastSha, []);
         });
       }
     });
   });

module.exports = router;
