const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = () => {
  const compiler = webpack(webpackConfig(true));

  compiler.run((err, stats) => {
    if (err) {
      return console.log(err.toString());
    }
    if (stats.hasErrors()) {
      return console.log(stats.toJson().errors[0].split('\n').slice(0, 2).join('\n'));
    }
    console.log('\n' + stats.toString({
      hash: false,
      chunks: false,
      children: false,
      colors: true,
    }));
  });
};