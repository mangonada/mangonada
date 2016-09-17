const blank = { message: ' ' };
const author = 'Arnav & Cady';
const config = {
  template: "metro",
  orientation: "horizontal",
  mode: "compact",     // special compact mode : hide messages & compact graph
};

function makeConfig(branch) {
  return {
    message: ' ',
    dotColor: branch.color
  };
}

const gitGraph = new GitGraph( config );
gitGraph.author = author;

const master = gitGraph.branch( "master" );
master.commit({ message: 'First commit!!!' })
  .commit(blank)
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
  .commit(devConfig);
yellow.merge(dev);
dev.merge(master);

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
