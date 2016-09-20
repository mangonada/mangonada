/**
 * This is a sample rendering of a Git repo. Reference the gitgraph.js
 * library for information on how it works. Each commit should be linear
 * in time, left to right. Hooked up in index.html.
 */

/**
 * Return a random integer between 1 and the number passed in, both inclusive.
 * @param  {Number} num - a maximum random value
 * @return {Number} - The random int
 */
const int = (num = 0) => Math.floor(Math.random() * (num + 1)) || 1;

/**
 * Returns a function that keeps track of an internal variable.
 * This variable increments by an amount indicated by the user
 * every time the returned function is called.
 * @param {Number} increment - The amount the number will increment by
 *                           every time the returned function is called
 * @return {Number} The incremented number
 */
function rememberNum(increment) {
  let number = 0;
  return function() {
    number += int(increment);
    return number;
  };
}

/**
 * A function returned by rememberNum() that will return a
 * number incremented by 1 or 2 whenever it is called.
 * @type {Function}
 */
const nextDay = rememberNum(2);

/**
 * Generates a timestamp some time after that of the previous generated timestamp.
 * Used by timestamp() to generate a new timestamp for commits.
 * @return {Date} Date either 1 or 2 days ahead of the previous date returned
 *                     by this function
 */
function timestamp() {
  const date = new Date(2016, 8, nextDay(), int(24), int(60), int(60));
  return date.toUTCString();
}

/**
 * function MakeConfig - Create a configuration object for a new branch. Insert
 * default commands and make node color the same as branch color.
 * @param  {Object} branch
 * @return {Object} [Config object]
 */
function makeConfig(branch) {
  return {
    dotColor: branch.color,
    gitCommands:
`${timestamp()}

Possible git commands:
 git checkout [branch name]
   options:
   -b: create and check out new branch
 git branch [branch name]
   options:
   -d: delete branch
   -D: delete branch, suppress warnings
 git tag [tag name]`,
  };
}

function addGitCommands(commitConfig, ...commands) {
  commands.forEach(command => commitConfig.gitCommands += ('\n ' + command));
  return commitConfig;
}

//Initial setup of graph
const author = 'Arnav & Cady';
const graphConfig = {
  template: "metro",
  orientation: "horizontal",
  mode: "compact",     // special compact mode : hide messages & compact graph
};

const tailNodeCommands = [
  `git reset HEAD(~[n]), [n] = number of commits to reset
   options:
   --hard: obliterate last n commits (can't be undone)
   --soft: remove last n commits but leave working
           directory unchanged`,
  'git merge',
  'git rebase',
  'git pull'
];

const gitGraph = new GitGraph( graphConfig );
gitGraph.author = author;

// Create a master branch with some commits
const master = gitGraph.branch( "master" ); //grey
master.commit(makeConfig(master))
  .commit(makeConfig(master))
  .commit(makeConfig(master));

//Create a dev branch with some commits
const dev = master.branch('dev'); //blue
dev.commit(makeConfig(dev))
  .commit(makeConfig(dev))
  .commit(makeConfig(dev))
  .commit(makeConfig(dev));

//Add commits to master
master.commit(makeConfig(master))
  .commit(makeConfig(master));

//Merge dev into master. Commit more onto dev.
dev.merge(master, makeConfig(master));
dev.commit(makeConfig(dev))
  .commit(makeConfig(dev))
  .commit(makeConfig(dev));

//Create a new branch from master, with some commits
const yellow = master.branch("Should be yellow"); //yellow (l0l)
yellow.commit(makeConfig(yellow))
  .commit(makeConfig(yellow))
  .commit(addGitCommands(makeConfig(yellow), ...tailNodeCommands));

//Commit on dev some more
dev.commit(makeConfig(dev))
  .commit(makeConfig(dev))
  .commit(makeConfig(dev));

//Merge dev into master
dev.merge(master, addGitCommands(makeConfig(master), ...tailNodeCommands));

//Turn cursor into hover-hand on hover
gitGraph.canvas.addEventListener("commit:mouseover", function(event) {
  this.style.cursor = "pointer";
});
