/* eslint-disable */
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RepoDisplay from '../containers/repo_display';
import FontIcon from 'material-ui/FontIcon';
import Timeline from 'material-ui/svg-icons/action/timeline';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import Bubbles from 'material-ui/svg-icons/editor/bubble-chart';
import Team from 'material-ui/svg-icons/social/people';
import $ from 'jquery';

export default class NavTabs extends Component {

  constructor(props) {
    super(props);
    this.enterTab = this.enterTab.bind(this);
    this.getGitGraph = this.getGitGraph.bind(this);
    this.getStats = this.getStats.bind(this);
    this.getWordCloud = this.getWordCloud.bind(this);
    this.getBubbleChart = this.getBubbleChart.bind(this);
  }

  enterTab(elementId) {
    console.log('get ' + elementId);

    d3.selectAll('.d3-tip')
    .style('opacity', 0)
    .html('');

    const elements = ['stats', 'word-cloud', 'container', 'bubble-chart'];

    elements.map((element) => { console.log(element); document.getElementById(element).className = "hidden"; } );

    document.getElementById(elementId).classList.remove("hidden");
    $('body').css('overflow', 'hidden');
  }

  getGitGraph(){
    this.enterTab('container');
  }

  getStats(){
    this.enterTab('stats');
    $('body').css('overflow', 'visible');
  }

  getWordCloud(){
    this.enterTab('word-cloud');
  }

  getBubbleChart(){
    this.enterTab('bubble-chart');
  }

  getAboutUs(){
    window.location.href = 'http://localhost:3000/about';
  }

  render() {
    const style = { padding: '10px' };
    return (
      <Tabs inkBarStyle={{background: 'none'}}>
      <Tab
        icon={<Timeline />}
        style={style}
        onActive={this.getGitGraph} >
      </Tab>
      <Tab
        icon={<Equalizer />}
        style={style}
        onActive={this.getStats} >
      </Tab>
      <Tab
        icon={<FormatQuote />}
        style={style}
        onActive={this.getWordCloud} >
      </Tab>
      <Tab
        icon={<Bubbles />}
        style={style}
        onActive={this.getBubbleChart} >
      </Tab>
      <Tab
        icon={<Team />}
        style={style}
        onActive={this.getAboutUs} >
      </Tab>
    </Tabs>
  )}
}
