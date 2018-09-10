'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);

new WebpackDevServer(compiler, {
  disableHostCheck: true,
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', err => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
