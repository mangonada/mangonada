/**
 * This is the container that displays the word cloud. It needs access to the
 * redux state to receive the commit data returned from the api call. Does not
 * need to dispatch to the redux state.
 *
 * While this is a container, React is not actually being used to manipulate the
 * DOM here. We simply call a function that will directly go to our canvas and
 * draw on it, bypassing React.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class WordCloud extends Component {

  makeWordCloud() {
    $('#word-cloud').empty();
    const w = window.innerWidth;
    const h = window.innerHeight;

    // create single string consisting of all words in commit messages
    let words = this.props.currentRepo.JSONCommits.reduce((currentString, word) => currentString.concat(' ', word.commit.message), '');
    // Replace punctuation with spaces
    words = words.replace(/\d|\W/g, '').split(' ')

    // Count frequency of each word and create new array of non duplicates
    const frequencyCount = {};
    const uniqueWords = [];
    words.forEach((word) => {
      if (frequencyCount[word] === undefined) {
        frequencyCount[word] = 0;
        uniqueWords.push(word);
      }
      frequencyCount[word] += 1;
    });
    // Create array with text and frequencyCount as properties
    words = uniqueWords.map((d) => {
      return { text: d, size: (frequencyCount[d]) + 20 };
    });
    // Sort words in descending size order
    words = words.sort((a, b) => {
      if (a.size < b.size) {
        return 1;
      } else if (a.size > b.size) {
        return -1;
      }
      return 0;
    });

    // Scale of colors for words
    const fill = d3.scale.category20();

    // Construct the word cloud's SVG element
    const svg = d3.select('#word-cloud')
                  .append('svg')
                  .attr('width', w)
                  .attr('height', h)
                  .append('g')
                  .attr('transform', `translate(${[w >> 1, h >> 1]})`);


    // Draw the word cloud
    function draw(words) {
      const cloud = svg.selectAll('g text')
                       .data(words, d => d.text);

      // Entering words
      cloud.enter()
           .append('text')
           .style('font-family', 'Impact')
           .style('fill', (d, i) => fill(i))
           .attr('text-anchor', 'middle')
           .attr('font-size', 1)
           .text(d => d.text);

      // Entering and existing words
      cloud.transition()
           .duration(600)
           .style('font-size', d => `${d.size}px`)
           .attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
           .style('fill-opacity', 1);
    }
    // Start word cloud placement
    d3.layout.cloud().size([w * 0.90, h * 0.70])
                     .words(words)
                     .rotate(() => ~~((Math.random() * 6) - 2.5) * 30)
                     .text(d => d.text)
                     .font('Impact')
                     .fontSize(d => d.size)
                     .on('end', draw)
                     .start();
  }

  render() {
    return (
      <div>
        {this.makeWordCloud()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { currentRepo: state.currentRepo };
}

export default connect(mapStateToProps)(WordCloud);
