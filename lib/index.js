const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version);

program
  .command('init')
  .description('initialize your component project')
  .action(() => {
    require('./init')();
  });

program
  .command('server')
  .description('start dev server')
  .action(() => {
    require('./server')();
  });

program
  .command('pack')
  .description('build your components')
  .action(() => {
    require('./pack')();
  });

program
  .command('lint')
  .description('lint code')
  .action(() => {
    require('./lint')();
  });

program.parse(process.argv);