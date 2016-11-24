/* eslint-disable */
/**
 * This container renders the navigation bar and the drawer. It does not need
 * access to items in redux state, but needs to dispatch to the redux state.
 * Uses material-ui for the rendering:
 *
 * http://www.material-ui.com/#/components/text-field
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchRepo from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import {orange500, blue500} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import SvgIcon from 'material-ui/SvgIcon';
import NavTabs from '../components/tabs';
import $ from 'jquery';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * SearchBar container
 * Renders the navigation bar and the drawer
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlEntered: this.props.urlEntered || 'https://github.com/',
      open: false,
    };
  }

  componentWillMount() {
    if (this.props.urlEntered.length > 'https://github.com/'.length) {
      const newUrlEntered = this.props.urlEntered;
      this.setState({ urlEntered: newUrlEntered });
      this.props.fetchRepo(newUrlEntered);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.urlEntered != this.props.urlEntered) {

      const newUrlEntered = this.props.urlEntered;
      // this.props.onSubmit(newUrlEntered);
      this.setState({ urlEntered: newUrlEntered });
      this.props.fetchRepo(newUrlEntered);
    }
  }

  /**
   * Handles url input from the user into the main searchbar
   * @param  {Object} event
   */
  onInputChange(event) {
    this.setState({ urlEntered: event.target.value });
  }

  /**
   * Handles when the user presses enter in the url searchbar.
   * Calls fetchRepo which makes a request to our backend.
   * @param  {Object} event
   */
  onFormSubmit(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      // if (this.props.onSubmit) {
      //   this.props.onSubmit(event.target.value);
      // }
      this.props.fetchRepo(this.state.urlEntered);
      if (this.state.urlEntered) {
        const hash = "/#" + this.state.urlEntered.slice().split('github.com')[1];
        window.location.hash = hash;
      }
      // render loading screen
      $('#loading').removeClass('hidden');
    }
  }

  /**
   * Handles toggling of the drawer using the hamburger icon
   * @param  {Object} event
   */
  handleToggle(event) {
    event.preventDefault();
    console.log(this.state.open);
    this.setState({ open: !this.state.open });
    setTimeout(() => console.log(this.state.open), 40);
  }

  /**
   * Handles closing of the drawer
   */
  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title={
              <a
                href='http://gitcentral.com/'
                style={{ 'textDecoration': 'none', color: 'white','fontFamily': 'Avenir Next'}} >
                  Git Central
              </a>
            }
            showMenuIconButton={false}
          >
          <NavTabs />
            <TextField
              style = {{width: 400,'fontFamily': 'Avenir Next'}}
              onChange={this.onInputChange.bind(this)}
              value={this.state.urlEntered}
              onKeyDown={this.onFormSubmit.bind(this)}
              hintText="Enter repo URL"
            />
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

/**
 * SearchBar needs access to the fetchRepo method in order to send
 * requests for new git repos.
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
