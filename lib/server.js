const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const openBrowser = require('open');
const ip = require('ip');

module.exports = () => {
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig());
  const host = ip.address();
  const port = 3000;

  const server = new webpackDevServer(compiler, {

    contentBase: [
      path.join(process.cwd(), 'demo'),
      path.join(process.cwd(), 'node_modules'),
    ],

    publicPath: '/',

    hot: true,

    host: '0.0.0.0',

    stats: {
      colors: true
    },
  });

  server.listen(port, '0.0.0.0', function() {
    console.log(chalk.green(`Starting server on http://${host}:${port}`));
    openBrowser(`http://${host}:${port}/index.htm`);
  });
  
};