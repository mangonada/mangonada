
// let {JSONcommits, SHALookup, JSONbranches} = require ('./a.js');

let {JSONcommits, JSONbranches} = require ('./l-2.js');
let SHALookup = { "sha" : {}};
/**
 * Set up SHALookup hash table
 * @type {Array}
 */
JSONcommits.reduce(function initCommitsAndLookupTable(results, commit, index, collection) {
  results[commit.sha] = commit;
  commit.children = [];
  return results;
}, SHALookup);
// console.log(SHALookup);

/**
 * Add childrens to each node
 * @type {[type]}
 */
JSONcommits.map(function insertChildren(commit, index, collection) {
  commit.parents.map(function (parentInfo) {
    var parentCommit = SHALookup[parentInfo.sha];
    if(parentCommit===undefined){
      return;
    }
    parentCommit.children.push(commit.sha);
  });
})

var branchLookUp={};

JSONbranches.reduce(function makeBranchesHash(results, branch, index, collection) {
  results[branch.commit.sha] = branch;
  return results;
}, branchLookUp);


JSONbranches.filter((branch)=>{
  return branch.name !== "master";
}).forEach((branch)=>{
  const commit = branchLookUp[branch.commit.sha];
  checkBranch(commit);
});

JSONbranches.filter((branch)=>{
  console.log(branch.name);
  return branch.name === "master";
}).forEach((branch)=>{
  const commit = branchLookUp[branch.commit.sha];
  checkBranch(commit);
});

function checkBranch({name,commit:{sha}}){
  const commit = SHALookup[sha];
  const checkBranchName = (commitObj)=>{
    // console.log(commitObj.branch);
    if(commitObj===undefined){
      return;
    }
    commitObj.branch = name;

    commitObj.parents.forEach((parent)=>{
      checkBranchName(SHALookup[parent.sha]);
    })
  }
  checkBranchName(commit);
}



console.log("after-=============branches");
JSONcommits.forEach(function(commit) {
  console.log({ sha: commit.sha, branch:commit.branch});

})
