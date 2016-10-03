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
  svg.selectAll('g')
    .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
  svg.selectAll('line')
    .attr("transform", "translate(" + translate + ")scale(" + d3.event.scale + ")");

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

function showToolTip(commit, originalBranches, tooltip) {
  const { branch, sha, html_url: url, author: { login: authorName } } = commit;
  const repoName = url.match(/\/\/[\w\.]*\/[\w\.]*\/(\w*)\//);

  //the ternary operator below: if the branch name is not fake (e.g. master, dev, etc.)
  //then make it a hyperlink; otherwise, don't display branch name
  const branchLink = `https://github.com/${authorName}/${repoName[1]}/commits/${branch}`;

  const tooltipContent =
`${originalBranches.includes(branch) ? 'Branch: ' + makeAnchor(branch, branchLink) + '\n' : '' }SHA:    ${makeAnchor(sha.slice(0, 9) + '...', url)}
Author: ${authorName}

Message: ${commit.commit.message}`;

  tooltip.html(`<pre>${tooltipContent}</pre>`);
  tooltip.show();
}

export default {
  makeAnchor,
  zoomed,
  addColors,
  startLoadAnimation,
  showToolTip,
};
