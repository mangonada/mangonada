/* eslint-disable */
/**
 * The top-most component. Does not do anything except render
 * the different divs.
 */

import React, { Component } from 'react';
import RepoDisplay from '../containers/repo_display';
import Chart from '../containers/chart';
import WordCloud from '../containers/word_cloud';
import BubbleChart from '../containers/bubble_chart';

export default class App extends Component {
  render() {
    return (
      <div>
        <RepoDisplay />
        <Chart />
        <WordCloud />
        <BubbleChart />
      </div>
    );
  }
}
