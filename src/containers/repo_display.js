/* eslint-disable */
/**

 * This is the container that displays the repo itself. It needs access to the
 * redux state to receive the commit data returned from the api call. Does not
 * need to dispatch to the redux state.
 *
 * While this is a container, React is not actually being used to manipulate the
 * DOM here. We simply call a function that will directly go to our canvas and
 * draw on it, bypassing React.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GithubApiInterface from '../reducers/gitD3/githubBranchFunction';
import tooltip from '../reducers/gitD3/d3tip.js';
import _  from 'lodash';
import $ from 'jquery';
import displayHelpers from './display_helpers';
import generateCoordinates from './coordinate_generator';

d3.tip = tooltip;

class RepoDisplay extends Component {
  makeD3Display () {
    $('#container').empty();
    $('.d3-tip').remove();

    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    const githubTranslator = new GithubApiInterface(
      this.props.currentRepo.JSONCommits,
      this.props.currentRepo.JSONBranches
    );

    const {
      JSONBranches,
      SHALookup,
      branchLookup,
      originalBranches,
      JSONCommits: d3commits
    } = githubTranslator;

    const {
      showToolTip,
      makeAnchor,
      zoomed,
      renderRepoName,
      addColors,
      addDates,
    } = displayHelpers;

    addColors(branchLookup);
    generateCoordinates(d3commits, SHALookup, branchLookup);

    //http://bl.ocks.org/Caged/6476579
    const infoTip = d3.tip()
      .attr('class', 'd3-tip')
      .direction('s')
      .offset([10, 0]);

    const totalCommits = d3commits.length;
    const largeLimit = 10;
    let smallLimit;
    if(totalCommits < 500) smallLimit = 0.1;
    else if (totalCommits < 1000) smallLimit = 0.05;
    else if (totalCommits < 2000) smallLimit = 0.25;
    else smallLimit = 0.01;
    const zoomLimit = [smallLimit, largeLimit];

    //https://bl.ocks.org/mbostock/6123708
    const zoom = d3.behavior.zoom()
      .scaleExtent(zoomLimit)
      .on("zoom", () => zoomed(svg));

    let svg = d3.select('#container').append('svg')
      .attr('width', pageWidth)
      .attr('height', pageHeight)
      .on('click', function() {
        d3.selectAll('.d3-tip')
          .style('opacity', 0)
          .html('');
      })
      .call(zoom);

    svg.call(infoTip);

    let container = svg.append('g');
    const straightLineLocations = [];

    d3commits.forEach(commit => {
      commit.children.forEach(child => {
        let childObj = githubTranslator.getCommit(child);

        if(commit.y === childObj.y) {
          straightLineLocations.push({ y:commit.y, xStart: commit.x, xEnd: childObj.x });
        }

        //curved lines: http://stackoverflow.com/questions/34558943/draw-curve-between-two-points-using-diagonal-function-in-d3-js
        const curveData = [ {x:commit.x, y:commit.y },{x:childObj.x,  y:childObj.y}];
        const edge = svg.append('g');
        const diagonal = d3.svg.diagonal()
          .source(function(d) {return {"x":d[0].y, "y":d[0].x}; })
          .target(function(d) {return {"x":d[1].y, "y":d[1].x}; })
          .projection(function(d) { return [d.y, d.x]; });

        try {
          svg.select("g")
              .datum(curveData)
            .append("path")
              .attr("class", "line")
              .attr("d", diagonal)
              .attr("stroke-width", 1)
            .attr('stroke', branchLookup[commit.branch].color)
            .attr('fill', 'none');
        } catch(err) {
          console.log(err);
        }
      });
    });

    //Make the nodes
    const nodes = svg.append('g')
      .attr('class', 'commit')
      .selectAll('circle')
      .data(d3commits)
      .enter().append('circle')
      .attr('r', 5)
      .attr('cx', commit => commit.x)
      .attr('cy', commit => commit.y)
      .attr('stroke', commit => branchLookup[commit.branch].color)
      .attr('fill', commit => branchLookup[commit.branch].color);

    //show the tool on hover
    nodes.on('mouseover', node => showToolTip(node, originalBranches, infoTip));

    const highestNode = d3commits.reduce((highest, commit) => {
      return commit.y < highest ? commit : highest;
    });

    addDates(svg, d3commits, highestNode.y);
    renderRepoName(highestNode, svg);
  }


  render() {
    
    $('#loading').addClass('hidden');

    return (
      <div>
        {this.makeD3Display()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentRepo: state.currentRepo };
}

//anything returned from this fn will end up as props
//on RepoDisplay container
// function mapDispatchToProps(dispatch) {
//   //whenever updateNode is called, the result should be passed
//   //to all of our reducers
//   return bindActionCreators({ updateNode }, dispatch);
// }

export default connect(mapStateToProps /*, mapDispatchToProps*/)(RepoDisplay);
