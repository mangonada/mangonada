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
    console.log('setupShaLookup');
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
    console.log('addChildren');
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
    console.log('getParentShas');
    return commit.parents.map( parent => parent.sha);
  }

  /**
   * Set up table to look up branch objects by sha
   */
  setupBranchLookup() {
    console.log('setupBranchLookup');
    this.JSONBranches.reduce((results, branch) => {
      const branchLookup = results;
      branchLookup[branch.commit.sha] = branch;
      return branchLookup;
    }, this.branchLookup);
  }

  /**
   * Iterate through each branch that is not master, and name branches
   */
   addBranchName() {
    const branches = this.JSONBranches.filter((b) => { return (b.name !== "master"); });

    const sortedBranches = branches.map((branch) => {
      const length = this.visitParents(this.SHALookup[branch.commit.sha], () => 1);
      return { sha: branch.commit.sha, name: branch.name, length: length };
    }).sort((branchA, branchB) => {
      return branchA.length - branchB.length;
    });
    sortedBranches.forEach((branch) => {
      const commit = this.branchLookup[branch.sha];
      this.nameMainBranch(commit);
    });

    const masterBranch = this.JSONBranches.filter((b) => { return (b.name === "master"); })[0];
    this.nameMainBranch(masterBranch);

    // rename orphan branches
    this.JSONCommits.filter(this.filter2Parents)
        .map(this.setOrphanName);
  }

  setOrphanName(commit) {
    if ((commit.children.length > 1) || (commit.parents.lenght > 1)) {
      return;
    }
  }

  visitParents(commit, cb){
    console.log('visitParents', commit);
    if (commit === undefined) return 0;
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
  nameMainBranch({ name, commit: { sha } }) {

    const commit = this.SHALookup[sha];
    const nameParentBranchName = (commitObj) => {
      if (commitObj !== undefined) {
        commitObj.branch = name;
        // console.log("master branch = ", name);
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
    console.log('filter2Parents');
    return JSONCommitObj.parents.length > 1;
  }
  /**
   * Return the parent at index 1
   * [Map function]
   */
  getRightParent(JSONCommitObj) {
    console.log('getRightParent');
    return this.SHALookup[JSONCommitObj.parents[1].sha];
  }
  /**
   * Rename Orphan branches
   * [Map function]
   */
  renameOrphanParent(JSONCommitObj) {
    console.log('renameOrphanParent');
    if (JSONCommitObj.branch) { return; }
    if (JSONCommitObj.children.length > 1) {
      return;
    }
    let child = JSONCommitObj.children.reduce(this.findChildrenBranchName, child);
    const orphanBranchName = child.branch + "[" + JSONCommitObj.sha.slice(0, 5) + "]";
    JSONCommitObj.branch =  orphanBranchName;
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

  findChildrenBranchName(ans, kid) {
    const kidCommit =  this.SHALookup[kid];
    if (kidCommit && kidCommit.parents.includes(kid)) {
      return kidCommit;
    } else {
      return ans;
    }
  }
  /**
   * Alter JSONCommits object to have Orphan branch names
   */
  addOrphanBranch() {
    console.log('addOrphanBranch');
    this.JSONCommits
        .filter(this.filter2Parents)
        .map(this.getRightParent.bind(this))
        .map(this.renameOrphanParent.bind(this));
  }

  /**
   * Adds gitCommands property to commit and assigns universal git commands
   */
   addGitCommands(){
     console.log('addGitCommands');
     this.JSONCommits.map((commit) => {
       return this.analyzeCommit(commit);
     });
   }

  /**
   * [AnalyzeCommit] Applies universal git commands and checks if commit is a tail
   * [params] commit object
   * [return value] modified commit
   */
    analyzeCommit(commit){
      console.log('analyzeCommit');
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
      console.log('addTailCommands');
       commands.forEach(command => commit.gitCommands += ('\n ' + command));
      return commit;
    }

    /**
     * [formatMessages]Formats messages
     */
    formatMessages(){
      console.log('formatMessages');
      return this.JSONCommits.map((commitObj) => {
        commitObj.commit.message = this.addLineBreak(commitObj.commit.message);
        return commitObj;
      });
    }

    addLineBreak(message, tempMessage = ''){
      console.log('addLineBreak');
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
