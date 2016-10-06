import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SearchBar from './containers/searchbar';
import RepoDisplay from './containers/repo_display';

class AppWrapper extends Component {
  filterRepo(event) {
    event.preventDefault();

    //make all nodes the correct color (not red)
    d3.select('#container').selectAll('circle')
      .each(function(node){
        d3.select(this)
          .classed('selected', false);
      });

    //consistently use toLowerCase() to remove case-sensitivity
    const terms = event.target.value.toLowerCase().split(' ');
    
    //if empty string, return
    if(terms[0] === '') return;

    d3.select('#container').selectAll('circle')
      .each(function(node){
        const nodeText = JSON.stringify(node).toLowerCase();
        const termCheck = terms.map(term => nodeText.includes(term));

        //if no false values are in the termCheck array
        if(!termCheck.includes(false)) {
          d3.select(this)
            .classed('selected', true);
        }
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <form onInput={this.filterRepo}>
          <input type="text" className="form-control" placeholder="Keyword search" />
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={App}/>
  </Route>  
);
