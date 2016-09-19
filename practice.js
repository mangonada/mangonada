/**
 * Indicate head branch
 * Look into modifying merge function in gitGraph.js to display gitOptions/commands
 * git rebase / pull from every end commit
 * show global commands?
 *
 */


const blank = { message: ' ' };
const author = 'Arnav & Cady';
const config = {
  template: "metro",
  orientation: "horizontal",
  mode: "compact",     // special compact mode : hide messages & compact graph
};

function makeConfig(branch) {
  return {
    dotColor: branch.color,
    gitCommands: 'git checkout, git branch, git tag',
  };
}

const gitGraph = new GitGraph( config );
gitGraph.author = author;

const master = gitGraph.branch( "master" );
master.commit({ message: 'First commit!!!' })
  .commit()
  .commit(blank);

const dev = gitGraph.branch('dev');
const devConfig = makeConfig(dev);
dev.commit(devConfig)
  .commit(devConfig)
  .commit(devConfig)
  .commit(devConfig);

master.commit(blank)
  .commit(blank);
dev.merge(master);

dev.commit(devConfig)
  .commit(devConfig)
  .commit(devConfig);

const yellow = master.branch("Should be yellow");
const yellowConfig = makeConfig(yellow);
yellow.commit(yellowConfig)
  .commit(yellowConfig)
  .commit(yellowConfig);

dev.commit(devConfig)
  .commit(devConfig)
  .commit({
    dotColor: dev.color,
    gitCommands: 'git checkout, git merge',
  });
dev.merge(master);
console.log(dev);

gitGraph.canvas.addEventListener("commit:mouseover", function(event) {
  this.style.cursor = "pointer";
});

// const fork = new GitGraph.orphanBranch(config);
// const forkMaster = fork.branch('master');
// const forkMasterConfig = {
//   message: ' ',
//   color: forkMaster.color,
// };

// forkMaster.commit(forkMasterConfig)
//   .commit(forkMasterConfig);
