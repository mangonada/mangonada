/**
 * display_helpers.js
 *
 * This file contains all helper functions used in repo_display.js,
 * except generateCoordinates.
 */

/**
 * Create an HTML anchor tag
 * @param  {String} linkedText - the text you wish to appear
 * @param  {String} site - the site to link to
 * @return {String} - the anchor HTML element
 */
function makeAnchor(linkedText, site) {
  return `<a href="${site}" target="_blank">${linkedText}</a>`;
}

//https://bl.ocks.org/mbostock/6123708
function zoomed(svg) {
  const { translate, scale } = d3.event;
  const translation = `translate(${translate})scale(${scale})`;
  svg.selectAll('g').attr("transform", translation);
  svg.selectAll('line').attr("transform", translation);
  svg.selectAll('text').attr("transform", translation);

  //To make the tip essentially disappear from the page we remove its HTML.
  //It is still present on the page, but now consists of a tiny invisible square.
  d3.selectAll('.d3-tip')
    .style('opacity', 0)
    .html('');
}

//give each branch a different color property
function addColors(branches) {
  const colors = [
    '#FA8072',  //salmon
    "#7D3C98",  //purple
    "#2471A3",  //blue
    "#F1C40F",  //yellow
    '#E67E22',  //orange
    "#A93226",  //red
    "#17A589",  //aqua
    '#839192',  //grey
    '#000000',  //black
  ];

  let i = 0;
  for(let branch in branches) {
    branches[branch].color = colors[i++ % colors.length];
  }
}

function startLoadAnimation() {
  console.log('loading...')
  d3.selectAll('circle')
    .each(function(node) {
      d3.select(this)
        .transition()
        .duration(5000)
        .attr('cy', pageHeight * 2);
    });
}

const getCommitDate = commit => ('' + new Date(commit.commit.committer.date)).slice(0, 16);

function showToolTip(commit, originalBranches, tooltip) {
  const { branch, sha, html_url: url, author: { login: authorName } } = commit;
  const repoName = url.match(/\/\/[\w\.]*\/[\w\.]*\/(\w*)\//);
  const date = getCommitDate(commit);

  //the ternary operator below: if the branch name is not fake (e.g. master, dev, etc.)
  //then make it a hyperlink; otherwise, don't display branch name
  const branchLink = `https://github.com/${authorName}/${repoName[1]}/commits/${branch}`;

  const tooltipContent =
`Date:   ${date}
${originalBranches.includes(branch) ? 'Branch: ' + makeAnchor(branch, branchLink) + '\n' : '' }SHA:    ${makeAnchor(sha.slice(0, 9) + '...', url)}
Author: ${authorName}

Message: ${commit.commit.message}`;

  tooltip.html(`<pre>${tooltipContent}</pre>`);
  tooltip.show();
}

function addDates(svg, commits, lowestY) {
  const xOffset = 30;
  const yOffset = 40;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  let nodesSinceLastDate = 0;

  let lastSunday = null;
  const yMax = commits.reduce((maxY, nextCommit) => Math.max(maxY, nextCommit.y), lowestY) + 30;

  commits.forEach(commit => {
    const dateObj = new Date(commit.commit.committer.date);
    const dateStr = getCommitDate(commit);
    if(lastSunday === dateObj) return;

    //if sunday or it's been over a week
    if(
      (dateObj.getDay() === 0 || dateObj - lastSunday > oneWeek) &&
      ++nodesSinceLastDate > 12
    ) {
      const x = commit.x - xOffset / 2;
      const lowerPoint = {x, y: yMax + yOffset};
      const higherPoint = {x,  y:lowestY - 60};
      const curveData = [lowerPoint, higherPoint];

      const dateLine = svg.append('g');
      const diagonal = d3.svg.diagonal()
        .source(function(d) {return {"x":d[0].y, "y":d[0].x}; })
        .target(function(d) {return {"x":d[1].y, "y":d[1].x}; })
        .projection(function(d) { return [d.y, d.x]; });

      svg.select("g")
          .datum(curveData)
        .append("path")
          .attr("class", "dateLine")
          .attr("d", diagonal)
          .attr("stroke-width", '2px')
        .attr('stroke', '#000000')
        .attr('fill', 'none');

      // http://stackoverflow.com/questions/17410082/appending-multiple-svg-text-with-d3
      svg.append("text")
        .text(dateStr)
        .attr('class', 'dateText')
        .attr("x", lowerPoint.x + 7)
        .attr("y", lowerPoint.y - 1)
        .attr("font-size", 10);

      lastSunday = dateObj;
      nodesSinceLastDate = 0;
    }
  });
}

function renderRepoName(firstCommit, svg) {
  const { x, y: commitY } = firstCommit;
  const y = commitY - 70;
  const repoText = firstCommit.html_url.match(/.*github\.com\/(.*)\/commit.*/)[1];
  svg.append("text")
    .text(repoText)
    .attr('class', 'repoNameText')
    .attr("x", x)
    .attr("y", y)
    .attr("font-size", 24);
}

export default {
  renderRepoName,
  makeAnchor,
  zoomed,
  addColors,
  startLoadAnimation,
  showToolTip,
  addDates
};
