import React from 'react';

const AboutPage = () => (
  <div className="container">
    <div className="row center-children top-margin">
      <h3>About Team Git Central</h3>
    </div>

    <div className="row top-bottom-margin ">
      <div className="col-xs-6 col-md-3 center-children">
        <img className="profile-pic" src="/img/arnav.jpg" alt="arnav" />
        <div>Arnav Aggarwal</div>
        <div className="social-button-div">
          <a href="https://www.github.com/arnav-aggarwal" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" /></a>
          <a href="https://www.linkedin.com/in/arnavaggarwal" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
        </div>
      </div>
      <div className="col-xs-6 col-md-3 center-children">
        <a className="portfolio-link" href="http://martinkkwan.com" target="_blank" rel="noopener noreferrer" >
          <img className="profile-pic" src="/img/martin.jpg" alt="martin" />
          <div>Martin Kwan</div>
        </a>
        <div className="social-button-div">
          <a href="https://www.github.com/martinkwan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" /></a>
          <a href="https://www.linkedin.com/in/mkkwan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
          <a href="mailto:martinkkwan@gmail.com?Subject=Hello!" target="_top"><i className="fa fa-envelope fa-lg" /></a>
        </div>
      </div>

      <div className="col-xs-6 col-md-3 center-children">
        <img className="profile-pic" src="/img/cady.jpg" alt="cady" />
        <div>Cadence Banulis</div>
        <div className="social-button-div">
          <a href="https://www.github.com/cadeban" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" /></a>
          <a href="https://www.linkedin.com/in/cadence-banulis-18b234123" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
        </div>
      </div>

      <div className="col-xs-6 col-md-3 center-children">
        <img className="profile-pic" src="/img/tim.jpg" alt="tim" />
        <div> Timothy Shiu </div>
        <div className="social-button-div">
          <a href="https://www.github.com/timoweave" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" /></a>
          <a href="https://www.linkedin.com/in/tlinkedin" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
          <a href="https://www.twitter.com/timoshiu" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg" /></a>
        </div>
      </div>
    </div>
    <div className="row top-bottom-margin">
      <div className="col-md-6 bottom-margin">
        Git is a powerful tool and has a place in every
        modern software engineering project. Good git
        practices are vital to a fast and productive
        workflow. Despite its importance, there aren’t
        many good tools for analyzing your git
        workflow. That’s why we decided to
        create&nbsp;
        <a className="color-link" href="http://github.com/gitcentral/gitcentral" target="_blank" rel="noopener noreferrer">
          Git Central.
        </a>
      </div>
      <div className="col-md-6">
        The Git Central team has four amazing and
        talented software engineers committed to deliver an excellent user
        experience. We are all passionate about web
        development and using the latest cutting edge
        technologies.
      </div>
    </div>
  </div>
);

export default AboutPage;
