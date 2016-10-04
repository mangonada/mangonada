/* eslint-disable */
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RepoDisplay from '../containers/repo_display';
import FontIcon from 'material-ui/FontIcon';
import Timeline from 'material-ui/svg-icons/action/timeline';
import Equalizer from 'material-ui/svg-icons/av/equalizer';

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
  getGitGraph(){
    console.log('get graph');
    document.getElementById('stats').className="hidden";
    document.getElementById('container').classList.remove("hidden");
  }

  getStats(){
    console.log('get stats');
    document.getElementById('container').className="hidden";
    document.getElementById('stats').classList.remove("hidden");
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
    </Tabs>
  )}
}
