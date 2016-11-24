const express = require('express');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const githubAPI = require('./api');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const compiler = webpack(webpackConfig);

app.set('port', port);

app.use(morgan('combined'));

app.use(webpackMiddleware(compiler, {
  stats: {
    colors: true,
    reasons: true,
  },
  publicPath: webpackConfig.output.publicPath,
}));

app.use(express.static(path.join(__dirname, '/..')));

app.use('/api', githubAPI);

app.get('/', function (req, res) {
  const file = path.join(__dirname, 'index.html');
  console.log('Serving /', file);
  res.sendFile(file);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});

