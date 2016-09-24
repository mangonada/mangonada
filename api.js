const express = require('express');
const request = require('request-promise');
const router = express.Router();

// module.exports = router;

router.param('userName', function(req, res, next, userLabel) {
  req.user = userLabel;
  next();
});

router.param('repoName', function(req, res, next, repoLabel) {
  req.repo = repoLabel;
  next();
});

router.param('endpoint', function(req, res, next, endpointLabel) {
  req.endpoint = endpointLabel;
  next();
});

router.route('/repos/:userName/:repoName')
.all(function(req, res, next) {
  // console.log(req.user, req.repo, req.endpoint);
  next();
})
.get(function(req, res) {

  let gitURL = `https://api.github.com/repos/${req.user}/${req.repo}`;
  let branchesURL = `${gitURL}/branches`;
  let commitsURL = `${gitURL}/commits`;
  let userAgent = 'help';
  let secrets = "client_id=423335fdf206466ccd3b&client_secret=bc10a999efc0335d06b6d84d470b76eda5a97b30";
  let branches = [];

  const branchOpt = { uri : `${branchesURL}?${secrets}`, headers : { 'User-Agent' : userAgent } };
  request(branchOpt)
  .then(function (branches) {

    branches = JSON.parse(branches);
    var requestBranchCommits = branches.reduce(makeRequestBranchCommits, []);


    Promise.all(requestBranchCommits).then(allCommits => {
      var requestAllCommits = { accum : [], lookup : {} };
      let allFlattenCommits = allCommits.reduce( (r, c) => { return r.concat(JSON.parse(c)) }, []);

      allFlattenCommits.sort((lhs, rhs) => {
        return Date.parse(lhs.committer.date) - Date.parse(rhs.committer.date);
      });

      allFlattenCommits.reduce((container, branchCommit) => {
        if (container.lookup[branchCommit.sha] === undefined) {
          container.lookup[branchCommit.sha] = true;
          container.accum.push(branchCommit);
        }
        return container;
      }, requestAllCommits);

      res.status(200).json([branches, requestAllCommits.accum]);

    }, (reason) => {
      res.status(401).end('noooooo');
    }).then( (results) => { console.log(results);}); // what are we doing with this line?

    // functions
    function makeRequestBranchCommits(results, branch, index) {
      const commitsOpt = { uri : `${commitsURL}?sha=${branch.commit.sha}&${secrets}`,
                           headers : { 'User-Agent' : userAgent } };
      const branchPromise = request(commitsOpt);
      results.push(branchPromise);
      return results;
    }
  });
});


module.exports = router;
