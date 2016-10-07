/* eslint-disable */
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RepoDisplay from '../containers/repo_display';
import FontIcon from 'material-ui/FontIcon';
import Timeline from 'material-ui/svg-icons/action/timeline';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import Bubbles from 'material-ui/svg-icons/editor/bubble-chart';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


export default class NavTabs extends Component {
  // need to refactor to use react properly at some point
  // make DRY?
  getGitGraph(){
    console.log('get graph');
    document.getElementById('stats').className="hidden";
    document.getElementById('word-cloud').className="hidden";
    document.getElementById('container').classList.remove("hidden");
    document.getElementById('bubble-chart').className="hidden";
  }

  getStats(){
    console.log('get stats');
    document.getElementById('container').className="hidden";
    document.getElementById('word-cloud').className="hidden";
    document.getElementById('stats').classList.remove("hidden");
    document.getElementById('bubble-chart').className="hidden";
  }

  getWordCloud(){
    console.log('get word cloud');
    document.getElementById('container').className="hidden";
    document.getElementById('stats').className="hidden";
    document.getElementById('word-cloud').classList.remove("hidden");
    document.getElementById('bubble-chart').className="hidden";
  }

  getBubbleChart(){
    console.log('get bubble chart');
    document.getElementById('container').className="hidden";
    document.getElementById('stats').className="hidden";
    document.getElementById('word-cloud').className="hidden";
    document.getElementById('bubble-chart').classList.remove("hidden");
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
