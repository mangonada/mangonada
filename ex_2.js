// Documentation:
// http://gitgraphjs.com/docs/GitGraph.html
// https://github.com/nicoespeon/gitgraph.js/blob/develop/examples/index.js
const myTemplateConfig = {
  colors: ['#F00', '#0F0', '#00F'], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50,
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12,
    },
    message: {
      displayAuthor: true,
      displayBranch: false,
      displayHash: false,
      font: 'normal 12pt Arial',
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter(commit) {
      return '<b>' + commit.sha1 + '</b>' + ': ' + commit.message;
    },
  },
};
const myTemplate = new GitGraph.Template(myTemplateConfig);

/** *********************
 *    INITIALIZATION   *
 ***********************/

const config = {
  template: 'metro',      // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
  // , reverseArrow: true  // to make arrows point to ancestors, if displayed
  orientation: 'horizontal',


  // , mode: "compact"     // special compact mode : hide messages & compact graph
};
// const gitGraph = new GitGraph(config);

/** *********************
 * BRANCHS AND COMMITS *
 ***********************/

const martin = 'Martin Kwan <martinkkwan@gmail.com>';
const tim = 'timothy shiu <timoweave@gmail.com>';
console.log('hello');

const gitCommandLists = [
  { command: 'git_branch', branch: 'master' },
  { command: 'git_commit', branch: 'master', sha1: '666', message: 'Initial commit', author: martin },
  { command: 'git_commit', branch: 'master', sha1: '666', message: 'My second commit', author: martin },
  { command: 'git_commit', branch: 'master', sha1: '666', message: 'Add awesome feature', author: martin },
  { command: 'git_branch', branch: 'dev' },
  { command: 'git_commit', branch: 'dev', sha1: '666', message: 'youhou', author: tim },
  { command: 'git_commit', branch: 'master', sha1: '666', message: "I'm the master", author: martin },
  { command: 'git_commit', branch: 'dev', dotColor: 'white',
   dotSize: 10, dotStrokeWidth: 10,
   messageHashDisplay: false, messageAuthorDisplay: true,
   message: "Alors c'est qui le papa ?", tooltipDisplay: false,
   author: 'Me <me@planee.fr>' },
  { command: 'git_commit', branch: 'dev', message: 'test', detailId: 'detail' },
  { command: 'git_commit', branch: 'dev', message: 'nothing' },
  { command: 'git_commit', branch: 'dev', message: 'nothing 2' },

  { command: 'git_commit', branch: 'master', sha1: '666', message: '', author: martin },

  { command: 'git_commit', branch: 'master', sha1: '666', message: '', author: martin },
  { command: 'git_commit', branch: 'master', sha1: '666', message: '', author: martin },
  { command: 'git_merge', branch: 'master', mergeFrom: 'dev', mergeTo: 'master' },
  { command: 'git_branch', branch: 'test' },
  { command: 'git_commit', branch: 'test', message: 'final commit' },
  { command: 'git_merge', branch: 'test', mergeFrom: 'test', mergeTo: 'master', message: 'My special merge commit message' },
  { command: 'git_commit', branch: 'test', message: 'It works!' },
  { command: 'git_commit', branch: 'test', message: 'Here you can see something', tag: 'a-tag' },
  { command: 'git_commit', branch: 'test', message: 'Here is a fresh new tag', tag: 'my-tag', displayTagBox: false },
  { command: 'git_merge', branch: 'test', mergeFrom: 'test', mergeTo: 'master', message: 'New release', tag: 'v1.0.0' },
  { command: 'git_commit', branch: 'test', message: 'Click me!' },
];

// console.log(gitCommandLists);
console.log('hey martin');

function makeGitGraph(gitCommands, gitGraphOptions) {
 // convert git-command-lists -> gitgraph

  const branches = {}; // gitCommit, gitBranch // GitGraph.checkout???
  const gitGraph = new GitGraph(gitGraphOptions);
  const gitGraphMethods = {
    git_branch: gitBranch,
    git_commit: gitCommit,
    git_merge: gitMerge,
    git_rebase: gitRebase,
    git_checkout: gitCheckout,
  };

  gitCommands.forEach((gitCommand) => {
    const gitGraphMethod = gitGraphMethods[gitCommand.command];
    gitGraphMethod(gitCommand, gitGraph);
  });

  return gitGraph;

  // function

  function gitBranch(gitCommand, gitGraph) {
    if (!branches.hasOwnProperty(gitCommand.branch)) {
      const branch = gitGraph.branch(gitCommand.branch);
      branches[gitCommand.branch] = branch;
      return branch;
    }
    return branches[gitCommand.branch];
  }

  function gitCommit(gitCommand, gitGraph) {
    console.log(gitCommand);
    const branch = branches[gitCommand.branch];
    branch.commit(gitCommand);
  }
  function gitMerge(gitCommand, gitGraph) {
    console.log(gitCommand);
    const mergeFromBranch = branches[gitCommand.mergeFrom];
    const mergeToBranch = branches[gitCommand.mergeTo];
    mergeFromBranch.merge(/* into*/ mergeToBranch, gitCommand.message || 'martin is not happy');
  }

  function gitRebase(gitCommand, gitGraph) {
    console.log(gitCommand);
  }
  function gitCheckout(gitCommand, gitGraph) {
    console.log(gitCommand);
  }
}

makeGitGraph(gitCommandLists, config);

// Create branch named "master"
// const master = gitGraph.branch('master');
// git checkout -b master
// == git branch master, git checkout master

// Commit on HEAD Branch which is "master"
// gitGraph.commit('Initial commit');
//
// // Add few commits on master.
// gitGraph.commit('My second commit').commit('Add awesome feature');
//
// // Create a new "dev" branch from "master"
// const dev = gitGraph.branch('dev');
// dev.commit('Youhou \\o/');
//
// // Commit again on "master"
// master.commit("I'm the master !");
//
// // Advanced commit method with style and specific author (HEAD)
// const commitConfig = {
//   dotColor: 'white',
//   dotSize: 10,
//   dotStrokeWidth: 10,
//   messageHashDisplay: false,
//   messageAuthorDisplay: true,
//   message: "Alors c'est qui le papa ?",
//   tooltipDisplay: false,
//   author: 'Me <me@planee.fr>',
// };
// gitGraph.commit(commitConfig);
//
// /** *********************
//  *      CHECKOUT       *
//  ***********************/
//
// // Checkout on master branch for create "test" since master
// // master.checkout();
//
// /** *********************
//  *       DETAILS       *
//  ***********************/
//
// const commitWithDetailsConfig = {
//   message: 'test',
//   detailId: 'detail', // Id of detail div (available in normal vertical mode only)
// };
// gitGraph.commit(commitWithDetailsConfig).commit();
// dev.commit().commit(); // 2 default Commit on "dev"
//
// /** *********************
//  *    CUSTOMIZATION    *
//  ***********************/
//
// gitGraph.author = 'Fabien0102 <fabien0102@planee.fr>';
// master.commit();
//
// /** *********************
//  *       MERGES        *
//  ***********************/
//
// master.checkout(); // the branch to merge with (target)
// dev.merge(); // the branch merging from (source)
//
// // Create a "test" branch and merge in into "master" with a custom message and tag.
// const test = gitGraph.branch('test');
// test.commit('Final commit');
// test.merge(master, 'My special merge commit message');
//
// // Then, continue committing on the "test" branch
// test.commit({ message: 'It works !' });
//
// /** *********************
//  *        TAGS         *
//  ***********************/
//
// // Add a tag to a commit
// test.commit({ message: 'Here you can see something', tag: 'a-tag' });
//
// // Don't display tag box
// test.commit({ message: 'Here is a fresh new tag', tag: 'my-tag', displayTagBox: false });
//
// // Perform a merge, with a tag
// test.merge(master, { message: 'New release', tag: 'v1.0.0' });
//
// /** *********************
//  *       EVENTS        *
//  ***********************/
//
// gitGraph.canvas.addEventListener('graph:render', (event) => {
//   // console.log( event.data.id, "has been rendered with a scaling factor of", gitGraph.scalingFactor );
// });
//
// gitGraph.canvas.addEventListener('commit:mouseover', function (event) {
//   // console.log( "You're over a commit.", "Here is a bunch of data ->", event.data );
//   this.style.cursor = 'pointer';
// });
//
// gitGraph.canvas.addEventListener('commit:mouseout', function (event) {
//   // console.log( "You just left this commit ->", event.data );
//   this.style.cursor = 'auto';
// });
//
// // Attach a handler to the commit
// test.commit({
//   message: 'Click me!',
//   onClick(commit) {
//     console.log('You just clicked my commit.', commit);
//   },
// });
