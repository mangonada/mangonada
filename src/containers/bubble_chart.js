/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { floatingTooltip } from './tooltip_helpers';
import $ from 'jquery';

class BubbleChart extends Component {
/**
 * Process commit author data and displays contributors info
 */
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
    const data = Object.keys(dataObj).reduce((accum, commitAuthor) => {
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
      const width = window.innerWidth;
      const height = 400;

      const tooltip = floatingTooltip('bubble_tooltip', 100, '#bubble-chart');
      let tooltipOnMouseover = false;
      let tooltipOnNode = false;

      $('.tooltip').on('mouseover', function(){
        tooltipOnMouseover = true;
      });
      $('.tooltip').on('mouseout', function(){
        tooltipOnMouseover = false;
        hideDetail();
      });

      /*
       * Function called on mouseover to display the
       * details of a bubble in the tooltip.
       */
        function showDetail(d) {
          // change outline to indicate hover state.
          d3.select(this).attr('stroke', 'black');

          const content = `<div class='contrib-content'>
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
        setTimeout(function(){
          if (!tooltipOnMouseover && !tooltipOnNode){
            tooltip.hideTooltip();
          }
        }, 3000);
      }

      // Locations to move bubbles towards, depending
      // on which view mode is selected.
      const center = { x: width / 2, y: height / 2 };

      // Used when setting up force and moving around nodes
      const damper = 0.102;

      // These will be set in create_nodes and create_vis
      let bubbleSvg = null;
      let bubbles = null;
      let nodes = [];

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
      const force = d3.layout.force()
        .size([width, height])
        .charge(charge)
        .gravity(-0.01)
        .friction(0.9);

      const colors = [
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

      const fillColor = d3.scale.ordinal()
        .domain(['low', 'medium', 'high'])
        .range(colors);


    // Sizes bubbles based on their area instead of raw radius
      const radiusScale = d3.scale.pow()
        .exponent(0.5)
        .range([2, 85]);

    /*
     * This function returns the new node array, with a node
     * in that array for each element in the rawData input.
     */
      function createNodes(data) {
        const myNodes = data.map(function (d) {
          return {
            author: d.author,
            radius: radiusScale(+d.commits),
            commits: d.commits,
            imgUrl: d.imgUrl,
            username: d.username,
            x: Math.random() * 900,
            y: Math.random() * 800,
          };
        });
      // sort them to prevent occlusion of smaller nodes.
        myNodes.sort((a, b) => b.commits - a.commits);

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
      const chart = function chart(selector, data) {
      // Use the max total_amount in the data as the max in the scale's domain
        const maxAmount = d3.max(data, d => +d.commits);
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
          .data(nodes, d => d.author);

      // Create new circle elements each with class `bubble` per node.
        bubbles.enter().append('circle')
          .classed('bubble', true)
          .attr('r', 0)
          .attr('fill', d => fillColor(d.author))
          .attr('stroke', d => d3.rgb(fillColor(d.group)).darker())
          .attr('stroke-width', 2)
          .attr('opacity', 0.5)
          .on('mouseover', function(d){
            tooltipOnNode = true;
            showDetail(d);
          })
          .on('mouseout', function(){
            tooltipOnNode = false;
            hideDetail();
          });

      // Fancy transition to make bubbles appear, ending with the
      // correct radius
        bubbles.transition()
          .duration(2000)
          .attr('r', d => d.radius);

      // Set initial layout to single group.
        groupBubbles();
      };

    /*
     * Force layout tick function is set to move all nodes to the
     * center of the visualization.
     */
      function groupBubbles() {
        hideYears();

        force.on('tick', (e) => {
          bubbles.each(moveToCenter(e.alpha))
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);
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
        return (d) => {
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

      return chart;
    }


  // Initialization code
    const myBubbleChart = bubbleChart();

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
