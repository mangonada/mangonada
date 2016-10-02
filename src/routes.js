import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RepoDisplay from './containers/repo_display';
import Chart from './containers/chart';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RepoDisplay} />
    {/* <Route path="chart" component={Chart} /> */}
    {/* <Route path=":user/:repo" component={RepoDisplay} />
    <Route path=":user/:repo/chart" component={Chart} /> */}
  </Route>
);
