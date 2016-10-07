/* eslint-disable */
import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SearchBar from './containers/searchbar';
import RepoDisplay from './containers/repo_display';

class AppWrapper extends Component {
  constructor(props) {   
    super(props);   
    
    this.state = { user_repo : "" };    
    this.updateUrl = this.updateUrl.bind(this);   
  }

  componentDidUpdate(prevProps, prevState) {    
    if ((prevProps.params.user != this.props.params.user) ||    
        (prevProps.params.repo != this.props.params.repo)) {    
    
      const newUrlEntered = `${this.props.params.user}/${this.props.params.repo}`;    
      this.updateUrl(newUrlEntered);    
    }   
  }   
    
  updateUrl(newUserRepo) {    
    this.setState({ user_repo : newUserRepo });   
  }

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
<<<<<<< 9e6cfc670a1ee616299a50a748daa8f4af04d0bb
    let user_repo ='https://github.com/';   
    if (this.props.params.user && this.props.params.repo) {   
      user_repo += this.props.params.user + '/' + this.props.params.repo;   
    }
    
=======
    console.log(this.props.children);
>>>>>>> (feat) add basic loading icon
    return (
      <div>
        <SearchBar urlEntered={user_repo} onSubmit={this.updateUrl.bind(this)} />
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
<<<<<<< 9e6cfc670a1ee616299a50a748daa8f4af04d0bb
    <IndexRoute component={App} />
    <Route path=":user/:repo" component={App} />
  </Route>  
=======
    <IndexRoute component={App}/>
    <Route path=":user/:repo" component={App}/>
  </Route>
>>>>>>> (feat) add basic loading icon
);
