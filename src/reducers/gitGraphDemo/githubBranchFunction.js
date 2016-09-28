/* eslint-disable */

export default class GithubApiInterface {
  constructor(JSONCommits, JSONBranches) {
    this.JSONCommits = JSONCommits;
    this.JSONBranches = JSONBranches;
    this.SHALookup = {};
    this.branchLookup = {};
    this.branchLengths = {};

    // initialization
    this.setupShaLookup();
    this.setupBranchLookup();
    this.addChildren();
    this.addBranchName();
    // json obj transformation
    this.addOrphanBranch();
    this.addGitCommands();
    this.formatMessages();
  }
  /**
   * Set up table to look up commit objects by sha
   * Initialize children array on each commit object
   */
  setupShaLookup() {
    this.JSONCommits.reduce((results, commit) => {
      results[commit.sha] = commit;
      commit.children = [];
      return results;
    }, this.SHALookup);
  }
  /**
   * Iterate through each commit to link children and parents
   */
  addChildren() {
    this.JSONCommits.forEach((commit) => {
      commit.parents.forEach((parentInfo) => {
        const parentCommit = this.SHALookup[parentInfo.sha];
        if (parentCommit !== undefined) {
          parentCommit.children.push(commit.sha);
        }
      });
    });
  }

  getParentShas(commit) {
    return commit.parents.map( parent => parent.sha);
  }

  /**
   * Set up table to look up branch objects by sha
   */
  setupBranchLookup() {
    this.JSONBranches.reduce((results, branch) => {
      const branchLookup = results;
      branchLookup[branch.commit.sha] = branch;
      return branchLookup;
    }, this.branchLookup);
  }

  addCommitBranchName() {
    const branches = this.JSONBranches
    .map(addBranchDepth(this.SHALookup))
    .sort(sortBranch)
    .map(nameThisBranch(this.SHALookup));

    this.JSONCommits
    .reverse()
    .filter((commit) => { return commit.parents.length === 2; })
    .map(nameSecondParents(this.branchLookup, this.SHALookup));

    // functions
    function nameSecondParents(branchLookup, commitLookup) {
      return function (commit) {
        const branchName = commit.branch;
        const rightParentCommit = commitLookup[commit.parents[1].sha];
        const subBranchName = branchName + "_" + rightParentCommit.sha.slice(0, 5);
        rightParentCommit.branch = subBranchName;

        let parent = rightParentCommit;
        if (parent.children.length === 1) {
          parent.branch = subBranchName;
        }

        while ((parent !== undefined) && (parent.parents !== undefined) && (parent.parents[0])) {
          if (parent.children.length === 1) {
            parent.branch = subBranchName;
            if (commitLookup[parent.parents[0].sha] === undefined) {
              // console.log("parent missing for sha", parent.parents[0].sha);
              break;
            }
            parent = commitLookup[parent.parents[0].sha];
          } else {
            // console.log("hello there");
            break;
          }
        }
      }
    }

    function nameThisBranch(lookup) {
      return function(branch) {
        const commit = lookup[branch.commit.sha];
        nameFirstParents(commit, branch.name, lookup);
      }
    }

    function nameFirstParents(commit, branchName, lookup) {
      commit.branch = branchName;
      while ((commit.parents.length > 0) && (commit.parents[0])) {
        const sha = commit.parents[0].sha;
        commit = lookup[sha];
        if (commit === undefined) {
          console.log("missing commit of sha ", sha);
          break;
        }
        commit.branch = branchName;
      }
    }

    function addBranchDepth(lookup) {
      return function (branch) {
        const sha = branch.commit.sha;
        const branchCommit = lookup[sha];
        branch.depth = countBranchDepth(branchCommit, lookup);
        return branch;
      }
    }

    function sortBranch (a, b) {
      if (a.name === 'master') { return 1; }
      if (b.name === 'master') { return 1; }
      const non_equal = a.depth - b.depth;
      if (!non_equal) { return non_equal; }
      if (a.name < b.name) {
        return -1;
      } else if (a.name === b.name) {
        return 0;
      } else {
        return 1
      }
    }

    function countBranchDepth(commit, lookup) {
      let depth = 1;
      while (commit.parents.length) {
        const sha = commit.parents[0].sha;
        commit = lookup[sha];
        if (commit === undefined) { break; }
        depth++;
      }
      return depth;
    }

  }


  /**
   * Iterate through each branch that is not master, and name branches
   */
   addBranchName() {
    const branches = this.JSONBranches.filter((b) => { return (b.name !== "master"); });

    const sortedBranches = branches.map((branch) => {
      const length = this.visitParents(this.SHALookup[branch.commit.sha], () => 1);
      return { sha: branch.commit.sha, name : branch.name, length : length };
    }).sort((branchA, branchB) => {
      return branchA.length - branchB.length;
    });
    sortedBranches.forEach((branch) => {
      const commit = this.branchLookup[branch.sha];
      this.nameBranch(commit);
    });

    const masterBranch = this.JSONBranches.filter((b) => { return (b.name === "master"); })[0];
    this.nameMaster(masterBranch);
  }

  visitParents(commit, cb){
    if (!commit) return 0;
    let val = cb(commit);
    if (!commit.parents || !commit.parents.length) { return val; }
    val += this.visitParents(this.SHALookup[commit.parents[0].sha], cb);
    return val;
  }

  /**
   * Assign branch property to each commit object
   * name: name of current branch
   * sha: sha of current commit
   */
  nameMaster({ name, commit: { sha } }) {

    const commit = this.SHALookup[sha];
    const nameParentBranchName = (commitObj) => {
      if (commitObj !== undefined) {
        commitObj.branch = name;
        nameParentBranchName(this.SHALookup[commitObj.parents[0].sha]);
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
        // checkBranchName(this.SHALookup[commitObj.parents[0].sha]));
      }
    }
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
    return this.SHALookup[JSONCommitObj.parents[1].sha];
  }
  /**
   * Rename Orphan branches
   * [Map function]
   */
  renameOrphanParent(JSONCommitObj) {
    if (JSONCommitObj.children.length > 1) {
      return;
    }
    JSONCommitObj.branch += JSONCommitObj.sha.slice(0, 5);
    const checkOrphan = (commitObj, branchName) => {
      if (commitObj === undefined) {
        return;
      }
      if (commitObj.children.length > 1) {
        return;
      }
      commitObj.branch = branchName;
      if (commitObj.parents.length > 0) {
        checkOrphan(this.SHALookup[commitObj.parents[0].sha], branchName);
      }
    }
    const leftParent = this.SHALookup[JSONCommitObj.parents[0].sha];
    checkOrphan(leftParent, JSONCommitObj.branch);
  }
  /**
   * Alter JSONCommits object to have Orphan branch names
   */
  addOrphanBranch() {
    this.JSONCommits
        .filter(this.filter2Parents)
        .map(this.getRightParent.bind(this))
        .map(this.renameOrphanParent.bind(this));
  }

  /**
   * Adds gitCommands property to commit and assigns universal git commands
   */
   addGitCommands(){
     this.JSONCommits.map((commit) => {
       return this.analyzeCommit(commit);
     });
     console.log('commits!', this.JSONCommits);
   }

  /**
   * Applies universal git commands and checks if commit is a tail
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
   * Add tails commit commands
   */
    addTailCommands(commit, ...commands) {
       commands.forEach(command => commit.gitCommands += ('\n ' + command));
      return commit;
    }

    /**
     * Formats messages
     */
    formatMessages(){
      return this.JSONCommits.map((commitObj) => {
        commitObj.commit.message = this.addLineBreak(commitObj.commit.message);
        return commitObj;
      });
    }

    addLineBreak(message, tempMessage = ''){
      let line = [];
      message.split(' ').forEach((word, i) => {
        line.push(word);
        if (i % 5 === 0){
          tempMessage += `\n${line.join(' ')}`;
          line = [];
        }
      });
      return tempMessage;
    }

}


//module.exports = GithubApiInterface;
