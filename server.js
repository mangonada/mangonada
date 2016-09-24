const express = require('express');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const api = require('./api');
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

app.use(express.static(__dirname + '/'));

app.use('/api', api);

app.get('*', function(req, res){
  console.log('Serving /');
  res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port);
console.log('Listening on port ', port);
