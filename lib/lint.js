const chalk = require('chalk');
const { CLIEngine } = require('eslint');

module.exports = () => {

  const cli = new CLIEngine({
  });
  const report = cli.executeOnFiles(['./src', './demo']);
  const formatter = cli.getFormatter('table');
  
  console.log(formatter(report.results));
};