/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _  from 'lodash';
import $ from 'jquery';

class BubbleChart extends Component {
  /*
 * Creates tooltip with provided id that
 * floats on top of visualization.
 */

  floatingTooltip(tooltipId, width) {
    // Local variable to hold tooltip div for
    // manipulation in other functions.
    var tt = d3.select('#bubble-chart')
      .append('div')
      .attr('class', 'tooltip')
      .attr('id', tooltipId);

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
      tt.style('opacity', 0.0);
    }

    /*
     * Figure out where to place the tooltip
     * based on d3 mouse event.
     */
    function updatePosition(event) {
      var xOffset = 2;
      var yOffset = 2;

      var ttw = tt.style('width');
      var tth = tt.style('height');

      var wscrY = window.scrollY;
      var wscrX = window.scrollX;

      var curX = (document.all) ? event.clientX + wscrX : event.pageX;
      var curY = (document.all) ? event.clientY + wscrY : event.pageY;
      var ttleft = ((curX - wscrX + xOffset * 1 + ttw) > window.innerWidth) ?
                   curX - ttw - xOffset * 1 : curX + xOffset;

      if (ttleft < wscrX + xOffset) {
        ttleft = wscrX + xOffset;
      }

      var tttop = ((curY - wscrY + yOffset * 1 + tth) > window.innerHeight) ?
                  curY - tth - yOffset * 1 : curY + yOffset;

      if (tttop < wscrY + yOffset) {
        tttop = curY + yOffset;
      }

      tt.style({ top: tttop + 'px', left: ttleft + 'px' });
    }

    return {
      showTooltip: showTooltip,
      hideTooltip: hideTooltip,
      updatePosition: updatePosition
    };
  }

  makeContributors() {
    const context = this;
  // Prep data
  const dataObj = this.props.currentRepo.JSONCommits.reduce((accum, commit) => {
    if (accum[commit.author.login] === undefined) {
      accum[commit.author.login] = {
        author: commit.commit.author.name,
        commits: 1,
        imgUrl: commit.author.avatar_url,
        url: commit.author.url,
        username: commit.author.login,
      }
    } else {
      accum[commit.author.login].commits += 1;
    }
    return accum;
  }, {});

  // Turn data object into an array of data objects
  let data = Object.keys(dataObj).reduce((accum, commitAuthor) => {
    accum.push(dataObj[commitAuthor]);
    return accum;
  }, []);

  /* bubbleChart creation function. Returns a function that will
  * instantiate a new bubble chart given a DOM element to
  * display it in and a dataset to visualize.
  */
  function bubbleChart() {
    // Clear old data on initialization
    $('#bubble-chart').empty();
    $('#bubble-chart').append('<br><h3>Contributors</h3>');
    // Constants for sizing
    var width = window.innerWidth;
    var height = 400;

    // tooltip for mouseover functionality
    var tooltip = context.floatingTooltip('gates_tooltip', 100);

    // Locations to move bubbles towards, depending
    // on which view mode is selected.
    var center = { x: width / 2, y: height / 2 };

    // Used when setting up force and moving around nodes
    var damper = 0.102;

    // These will be set in create_nodes and create_vis
    var bubbleSvg = null;
    var bubbles = null;
    var nodes = [];

    // Charge is proportional to the diameter of the
    // circle (which is stored in the radius attribute
    // of the circle's associated data.
    // This is done to allow for accurate collision
    // detection with nodes of different sizes.
    // Charge is negative because we want nodes to repel.
    // Dividing by 8 scales down the charge to be
    // appropriate for the visualization dimensions.
    function charge(d) {
      return -Math.pow(d.radius, 2.0) / 8;
    }

    // Creates a force layout and configure it to use the charge
    // function. This also sets some contants to specify how the
    // force layout should behave.
    var force = d3.layout.force()
      .size([width, height])
      .charge(charge)
      .gravity(-0.01)
      .friction(0.9);

    var colors = [
      '#FA8072',  // salmon
      '#7D3C98',  // purple
      '#2471A3',  // blue
      '#F1C40F',  // yellow
      '#E67E22',  // orange
      '#A93226',  // red
      '#17A589',  // aqua
      '#839192',  // grey
      '#000000',  // black
    ];

    var fillColor = d3.scale.ordinal()
      .domain(['low', 'medium', 'high'])
      .range(colors);


    // Sizes bubbles based on their area instead of raw radius
    var radiusScale = d3.scale.pow()
      .exponent(0.5)
      .range([2, 85]);

    /*
     * This function returns the new node array, with a node
     * in that array for each element in the rawData input.
     */
    function createNodes(data) {
      var myNodes = data.map(function (d) {
        return {
          author: d.author,
          radius: radiusScale(+d.commits),
          commits: d.commits,
          imgUrl: d.imgUrl,
          username: d.username,
          x: Math.random() * 900,
          y: Math.random() * 800
        };
      });
      // sort them to prevent occlusion of smaller nodes.
      myNodes.sort(function (a, b) { return b.commits - a.commits; });

      return myNodes;
    }

    /*
     * Main entry point to the bubble chart. Adds an svg element
     * to the provided selector and starts the creation process.
     *
     * Selector is expected to be a DOM element or CSS selector
     * that points to the parent element of the bubble chart.
     * Inside this element, the code will add the SVG continer
     * for the visualization.
     */
    var chart = function chart(selector, data) {
      // Use the max total_amount in the data as the max in the scale's domain
      var maxAmount = d3.max(data, function (d) { return +d.commits; });
      radiusScale.domain([0, maxAmount]);

      nodes = createNodes(data);
      // Set the force's nodes to our newly created nodes array.
      force.nodes(nodes);
      // Create a SVG element inside the provided selector
      // with desired size.
      bubbleSvg = d3.select('#bubble-chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      // Bind nodes data to what will become DOM elements to represent them.
      bubbles = bubbleSvg.selectAll('.bubble')
        .data(nodes, function (d) { return d.author; });

      // Create new circle elements each with class `bubble` per node.
      bubbles.enter().append('circle')
        .classed('bubble', true)
        .attr('r', 0)
        .attr('fill', function (d) { return fillColor(d.author); })
        .attr('stroke', function (d) { return d3.rgb(fillColor(d.group)).darker(); })
        .attr('stroke-width', 2)
        .attr('opacity', 0.5)
        .on('mouseover', showDetail)
        // .on('mouseout', hideDetail);

      // Fancy transition to make bubbles appear, ending with the
      // correct radius
      bubbles.transition()
        .duration(2000)
        .attr('r', function (d) { return d.radius; });

      // Set initial layout to single group.
      groupBubbles();
    };

    /*
     * Force layout tick function is set to move all nodes to the
     * center of the visualization.
     */
    function groupBubbles() {
      hideYears();

      force.on('tick', function (e) {
        bubbles.each(moveToCenter(e.alpha))
          .attr('cx', function (d) { return d.x; })
          .attr('cy', function (d) { return d.y; });
      });

      force.start();
    }

    /*
     * Helper function for center grouping.
     *
     * Positioning is adjusted by the force layout's
     * alpha parameter which gets smaller and smaller as
     * the force layout runs. This makes the impact of
     * this moving get reduced as each node gets closer to
     * its destination, and so allows other forces like the
     * node's charge force to also impact final location.
     */
    function moveToCenter(alpha) {
      return function (d) {
        d.x = d.x + (center.x - d.x) * damper * alpha;
        d.y = d.y + (center.y - d.y) * damper * alpha;
      };
    }

    /*
     * Hides Year title displays.
     */
    function hideYears() {
      bubbleSvg.selectAll('.year').remove();
    }

    /*
     * Function called on mouseover to display the
     * details of a bubble in the tooltip.
     */
    function showDetail(d) {
      // change outline to indicate hover state.

      d3.select(this).attr('stroke', 'black');

      var content = `<div class='contrib-content'>
        <span>
          <img src='${d.imgUrl}' class='img-url'>
        </span>
        <span>
          <b>${d.author}</b>
        </span>
        <br>
        ${d.commits} commits
        <br>
        <a href='https://www.github.com/${d.username}' target="_blank">See profile</a>
        <br>
      </div>`;

      tooltip.showTooltip(content, d3.event);
    }

    // Hides tooltip
    function hideDetail(d) {
      // reset outline
      d3.select(this)
        .attr('stroke', d3.rgb(fillColor(d.group)).darker());
      // tooltip.hideTooltip();
    }
    return chart;
  }


  // Initialization code
  var myBubbleChart = bubbleChart();

  /*
   * Calls bubble chart function to display inside #bubble-chart div.
   */
  function display(data) {
    myBubbleChart('#bubble-chart', data);
  }

  // Load the data.
  display(data);

  }

  render() {
    return (
      <div>
        {this.makeContributors()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentRepo: state.currentRepo };
}

export default connect(mapStateToProps)(BubbleChart);
