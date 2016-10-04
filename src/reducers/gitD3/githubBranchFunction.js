/* eslint-disable */

export default class GithubApiInterface {
  constructor(JSONCommits, JSONBranches) {
    this.JSONCommits = JSONCommits;
    this.JSONBranches = JSONBranches;
    this.originalBranches = JSONBranches.map(branch => branch.name);
    this.SHALookup = {};
    this.branchLookup = {};
    this.branchLengths = {};
    this.stats = {
      branches: {},
      contributors: {},
    };

    // initialization
    this.setupShaLookup();
    this.setupBranchLookup();
    this.addChildren();
    this.addBranchName();

    // json obj transformation
    this.addOrphanBranch();
    this.analyzeRepo();
    // this.addParentObj();
    this.validateCommits();
  }

  sortByDepth(a, b) {
    return a.depth - b.depth;
  }

  validateCommits() {
    // check what we add on top of original JSONCommits from github API
    this.JSONCommits.forEach(function(commit) {
      if (commit.sha === undefined) {
        // console.log("commit has no sha!!!!!!, really bad");
      }
      if (commit.parents === undefined) {
        // console.log("commit has no parents", commit.sha.slice(0, 5));
      }
      if (commit.branch === undefined) {
        // console.log("commit has no branch", commit.sha.slice(0, 5));
      }
      if (commit.depth === undefined) {
        // console.log("commit has no depth", commit.sha.slice(0, 5));
      }
      if (commit.children === undefined) {
        // console.log("commit has no children", commit.sha.slice(0, 5));
      }
      // if (commit.gitCommands === undefined) {
      //   console.log("commit has no git-command", commit.sha.slice(0, 5));
      // }
      if (commit.parentReferences === undefined) {
        // console.log("commit has no parent references", commit.sha.slice(0, 5));
      }
    });
  }
  /**
   * Set up table to look up commit objects by sha
   * Initialize children array on each commit object
   */
  setupShaLookup() {
    this.JSONCommits.forEach(commit => this.SHALookup[commit.sha] = commit);
  }

  //Iterate through each commit to link children and parents
  addChildren() {
    this.JSONCommits.forEach(commit => commit.children = []);
    this.JSONCommits.forEach(commit => {
      commit.parents.forEach(parent => {
        const parentCommit = this.SHALookup[parent.sha];
        if (parentCommit !== undefined) {
            parentCommit.children.push(commit.sha);
        }
      });
    });
  }

  getCommit(sha){
    return this.SHALookup[sha];
  }

  setupBranchLookup(){
    this.JSONBranches.forEach(branch => this.branchLookup[branch.name] = branch);
  }

  getParentShas(commit) {
    return commit.parents.map(parent => parent.sha);
  }

  /**
   * Iterate through each branch that is not master, and name branches
   */
   addBranchName() {
    const nonMasterBranches = this.JSONBranches.filter((b) => { return (b.name !== "master"); });

    const sortedBranches = nonMasterBranches.map((branch) => {
      const length = this.visitParents(this.SHALookup[branch.commit.sha], () => 1);
      return { sha: branch.commit.sha, name: branch.name, length: length };
    }).sort((branchA, branchB) => {
      return branchA.length - branchB.length;
    });

    sortedBranches.forEach((branch) => {
      const commit = this.branchLookup[branch.name];
      this.nameMainBranch(commit);
    });

    const masterBranch = this.JSONBranches.filter((b) => { return (b.name === "master"); })[0];
    this.nameMainBranch(masterBranch);
    sortedBranches.push(masterBranch);
    // rename orphan branches
    this.JSONCommits.filter(this.filter2Parents)
        .map(this.setOrphanName);
    this.JSONBranches = sortedBranches;
    this.setupBranchLookup();
  }

  setOrphanName(commit) {
    if ((commit.children.length > 1) || (commit.parents.lenght > 1)) {
      return;
    }
  }

  visitParents(commit, cb){
    if (commit === undefined) return 0;
    let val = cb(commit);
    if (!commit.parents || !commit.parents.length) { return val; }
    val += this.visitParents(this.SHALookup[commit.parents[0].sha], cb);
    commit.depth = val;
    return val;
  }

  /**
   * Assign branch property to each commit object
   * name: name of current branch
   * sha: sha of current commit
   */
  nameMainBranch({ name, commit: { sha } }) {

    const commit = this.SHALookup[sha];
    const nameParentBranchName = (commitObj) => {
      if (commitObj !== undefined) {
        commitObj.branch = name;
        commitObj.parents.forEach( (parent, index) => {
          if (index !== 0) { return ; }
          nameParentBranchName(this.SHALookup[parent.sha]);
        });
      }
    }
    nameParentBranchName(commit);
  }

  nameBranch({ name, commit: { sha } }) {
    const commit = this.SHALookup[sha];

    const checkBranchName = (commitObj) => {
      if (commitObj !== undefined) {
        commitObj.branch = name;
        commitObj.parents.forEach(parent => checkBranchName(this.SHALookup[parent.sha]));
      }
    };
    checkBranchName(commit);
  }

  /**
   * Return commit objects with more than one parent
   * [Filter function]
   */
  filter2Parents(JSONCommitObj) {
    return JSONCommitObj.parents.length > 1;
  }
  /**
   * Return the parent at index 1
   * [Map function]
   */
  getRightParent(JSONCommitObj) {
    if(JSONCommitObj === undefined) { return undefined; }
    return this.SHALookup[JSONCommitObj.parents[1].sha];
  }
  getLeftParent(JSONCommitObj) {
    if(JSONCommitObj === undefined) { return undefined; }
    return this.SHALookup[JSONCommitObj.parents[0].sha];
  }
  /**
   * Rename Orphan branches
   * [Map function]
   */
  urlParser(url, replacementSha){
    let splitUrl = url.split('/');
    splitUrl[splitUrl.length - 1] = replacementSha;
    return splitUrl.join('/');
  }

  nameOrphanParent(JSONCommitObj) {
    const rightParentCommitObj = this.getRightParent(JSONCommitObj);
    if (rightParentCommitObj === undefined) { return; }
    if (rightParentCommitObj.branch) { return; }
    if (rightParentCommitObj.branch !== undefined) { return; /* already labeled */}

    const newBranchName = JSONCommitObj.branch ||"orphan";
    const orphanBranchName = newBranchName + "[" + rightParentCommitObj.sha.slice(0, 5) + "]";
    const orphanBranchObj = { name : orphanBranchName, commit : { sha : rightParentCommitObj.sha } };
    this.JSONBranches[rightParentCommitObj.sha] = orphanBranchObj;
    this.branchLookup[orphanBranchName] = orphanBranchObj;
    rightParentCommitObj.branch =  orphanBranchName;

    const rightGrandParent = this.SHALookup[rightParentCommitObj.parents[0].sha];
    nameOtherOrphan(rightGrandParent, orphanBranchName, this.SHALookup, this.branchLookup, this.JSONBranches);

    function nameOtherOrphan(commitObj, branchName, shalookup, branchlookup, jsonBranches) {
      if (commitObj === undefined) { return; }

      if ((commitObj.children.length > 1) &&
          ((commitObj.branch !== undefined) && (commitObj.branch !== "undefined"))) {
        return;
      }
      if (branchlookup[branchName] === undefined) {
        const branchObj = { name : branchName, commit : { sha : commitObj.sha } };
        branchlookup[branchName]= branchObj;
        jsonBranches[commitObj.sh] = branchObj;
      }
      commitObj.branch = branchName;
      if (commitObj.parents.length > 0) {
        nameOtherOrphan(shalookup[commitObj.parents[0].sha], branchName, shalookup, branchlookup);
      }
    }
  }

  /**
   * Alter JSONCommits object to have Orphan branch names
   */
  addOrphanBranch() {
    this.JSONCommits
        .filter(this.filter2Parents)
        .map(this.nameOrphanParent.bind(this));
  }

  /**
   * Adds gitCommands property to commit and assigns universal git commands
   */
   addGitCommands(){
     this.JSONCommits.map((commit) => {
       return this.analyzeCommit(commit);
     });
   }


  nameUndefinedMainParents(JSONCommitObj) {
    let leftParentCommitObj = this.getLeftParent(JSONCommitObj);

    while ((leftParentCommitObj !== undefined) &&
           (leftParentCommitObj.branch === undefined)) {
      leftParentCommitObj.branch = JSONCommitObj.branch;
      if (leftParentCommitObj.parents.length === 0) { break; }
      leftParentCommitObj = this.SHALookup[leftParentCommitObj.parents[0].sha];
    }
  }

  /**
   * [AnalyzeCommit] Applies universal git commands and checks if commit is a tail
   * [params] commit object
   * [return value] modified commit
   */
    analyzeCommit(commit){
      const universalCommands = `Possible git commands:
      git checkout [branch name]
      options:
      -b: create and check out new branch
      git branch [branch name]
      options:
      -d: delete branch
      -D: delete branch, suppress warnings
      git tag [tag name]`;

      const tailCommands = [
        `git reset HEAD(~[n]), [n] = number of commits to reset
         options:
         --hard: obliterate last n commits (can't be undone)
         --soft: remove last n commits but leave working
                 directory unchanged`,
        'git merge',
        'git rebase',
        'git pull',
      ];

      commit.gitCommands = universalCommands;

      if (!commit.children.length){
        this.addTailCommands(commit, tailCommands);
      }
      return commit;
    }

  /**
   * [addTailCommands] Adds possible git commands for most recent branch nodes
   * to git menu
   * [params] commit, list of commands
   * [return value] modified commit
   */
    addTailCommands(commit, ...commands) {
      commands.forEach(command => commit.gitCommands += ('\n ' + command));
      return commit;
    }

    // analyze repo to obtain stats
    //Create an object with some statistics for the commits passed in
    // this.stats = {
    //   branches: {},
    //   contributors: {},
    // };
    analyzeRepo() {
      const commits = this.JSONCommits;
      const stats = {
        branches: {},
        contributors: {},
      };

      function countCommitsPerAuthor(author) {
        return commits.reduce((authorCount, commit) => {
          if((commit.author) && (commit.author.login === author)) authorCount++;
          return authorCount;
        }, 0);
      }

      function countCommitsPerBranch(branch) {
        return commits.reduce((branchCount, commit) => {
          if(commit.branch === branch) branchCount++;
          return branchCount;
        }, 0);
      }

      const { branches, contributors } = stats;

      for(let branch in this.branchLookup) {
        branches[branch] = branches[branch] || countCommitsPerBranch(branch);
      }

      commits.forEach((commit) => {
        let author = "";
        if (commit.author) { author = commit.author.login; }
        contributors[author] = contributors[author] || countCommitsPerAuthor(author);
      });

      this.stats = stats;
    }

    /**
     * Make the parent property of each commit point to the actual parent object
     */
    addParentObj() {
      this.JSONCommits.forEach(commit => {
        commit.parentReferences = commit.parents.map(parent => {
          return this.SHALookup[parent.sha];
        });
      });
    }

    addBranchParents() {
      const commitBranches = this.JSONCommits.map(commit => commit.branch);
      this.JSONBranches.forEach(branch => {
        const branchHeadCommit = this.JSONCommits[commitBranches.indexOf(branch)];
        if(branchHeadCommit) {
          const branchParentFinalCommit = branchHeadCommit.parents[0];
          if(branchParentFinalCommit) {
            const parentBranch = this.branchLookup[branchParentFinalCommit.branch];
            branch.parent = parentBranch;
          }
        }
      });
    }
}
