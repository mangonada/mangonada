/* eslint-disable */
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RepoDisplay from '../containers/repo_display';
import FontIcon from 'material-ui/FontIcon';
import Timeline from 'material-ui/svg-icons/action/timeline';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import Bubbles from 'material-ui/svg-icons/editor/bubble-chart';

function enterTab(elementId) {
  console.log('get ' + elementId);

  d3.selectAll('.d3-tip')
    .style('opacity', 0)
    .html('');

  document.getElementById('stats').className="hidden";
  document.getElementById('word-cloud').className="hidden";
  document.getElementById('container').className="hidden";
  document.getElementById('bubble-chart').className="hidden";

  document.getElementById(elementId).classList.remove("hidden");
}

export default class NavTabs extends Component {
  getGitGraph(){
    enterTab('container');
  }

  getStats(){
    enterTab('stats');
  }

  getWordCloud(){
    enterTab('word-cloud');
  }

  getBubbleChart(){
    enterTab('bubble-chart');
  }

  render (){
    return (
      <Tabs inkBarStyle={{background: 'none'}}>
      <Tab
        icon={<Timeline />}
        style={{padding: 5}}
        onActive={this.getGitGraph} >
      </Tab>
      <Tab
        icon={<Equalizer />}
        style={{padding: 5}}
        onActive={this.getStats} >
      </Tab>
      <Tab
        icon={<FormatQuote />}
        style={{padding: 5}}
        onActive={this.getWordCloud} >
      </Tab>
      <Tab
        icon={<Bubbles />}
        style={{padding: 5}}
        onActive={this.getBubbleChart} >
      </Tab>
    </Tabs>
  )}
}
