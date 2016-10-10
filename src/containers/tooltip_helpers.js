/**
 * tooltip_helpers.js
 *
 * This file contains the functions that control the
 * tooltip that appears when hovering over nodes on
 * the repo graph display.
 */

function makeAnchor(linkedText, site) {
  return `<a href="${site}" target="_blank">${linkedText}</a>`;
}

function getCommitDate (commit) {
  return ('' + new Date(commit.date)).slice(0, 16);
}

/*
 * Function called on mouseover to display the
 * details of a bubble in the tooltip.
 */
export function showDetail(commit, originalBranches, tooltip) {
  const {
    branch,
    sha,
    html_url: url,
    author: { login: authorName },
    commit: { message }
  } = commit;

  const date = getCommitDate(commit);
  const repoName = url.match(/\/\/[\w\.]*\/[\w\.]*\/(\w*)\//);
  const branchLink = `https://github.com/${authorName}/${repoName[1]}/commits/${branch}`;
  const branchNameLink = originalBranches.includes(branch) ?
    `<br>Branch: ${makeAnchor(branch, branchLink)}` : '';
  const shaLink = makeAnchor(sha.slice(0, 9) + '...', url);

  const content = `${date}
  ${branchNameLink}
  <br>
  <span>
    SHA: ${shaLink}
  </span>
  <br>
  <div>
    Author: ${authorName}
  <div>
  <br>
  ${message}`;

  tooltip.showTooltip(content, d3.event);
}

/*
 * Creates tooltip with provided id that
 * floats on top of visualization.
 */
export function floatingTooltip(tooltipId, width, context) {
  // Local variable to hold tooltip div for
  // manipulation in other functions.
  const tt = d3.select(context)
    .append('div')
    .attr('class', 'tooltip');
    // .attr('id', tooltipId);

  // Set a width if it is provided.
  if (width) {
    tt.style('width', width);
  }

  // Initially it is hidden.
  hideTooltip();

  /*
   * Display tooltip with provided content.
   * content is expected to be HTML string.
   * event is d3.event for positioning.
   */
  function showTooltip(content, event) {
    tt.style('opacity', 1.0)
      .html(content);
    updatePosition(event);
  }

  /*
   * Hide the tooltip div.
   */
  function hideTooltip() {
    tt.style('opacity', 0.0)
    .html('');
  }

  /*
   * Figure out where to place the tooltip
   * based on d3 mouse event.
   */
  function updatePosition(event) {
    const xOffset = 0;
    const yOffset = 0;

    const ttw = tt.style('width');
    const tth = tt.style('height');

    const wscrY = window.scrollY;
    const wscrX = window.scrollX;

    const curX = (document.all) ? event.clientX + wscrX : event.pageX;
    const curY = (document.all) ? event.clientY + wscrY : event.pageY;
    let ttleft = ((curX - wscrX + xOffset * 1 + ttw) > window.innerWidth) ?
                 curX - ttw - xOffset * 1 : curX + xOffset;

    if (ttleft < wscrX + xOffset) {
      ttleft = wscrX + xOffset;
    }

    let tttop = ((curY - wscrY + yOffset * 1 + tth) > window.innerHeight) ?
                curY - tth - yOffset * 1 : curY + yOffset;

    if (tttop < wscrY + yOffset) {
      tttop = curY + yOffset;
    }

    tt.style({ top: `${tttop}px`, left: `${ttleft}px`});
  }

  return {
    showTooltip,
    hideTooltip,
    updatePosition
  };
}
