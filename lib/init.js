const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const inquirer = require('inquirer');

const { getTemplates, renderTo } = require('./util');

const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'Project Name:',
    default: path.basename(process.cwd()),
  },
  {
    name: 'description',
    type: 'input',
    message: 'Project Description:',
    default: 'Component for quark-ui.',
  },
  {
    name: 'authorName',
    type: 'input',
    message: 'Your Name:',
    default: '',
  },
];

module.exports = () => {
  const templateRoot = path.resolve(__dirname, '../templates');

  Promise.all([
    inquirer.prompt(questions),
    getTemplates(),
  ]).then(([answers, templates]) => {
    const ComponentName = answers.name.replace(/^(?:[a-z]?)|-([a-z])/g, args => {
      if (args[1]) {
        return args[1].toUpperCase();
      }
      return args[0].toUpperCase(); 
    });
    Object.assign(answers, {
      ComponentName,
    });
    templates.forEach((filePath) => {
      let base = path.basename(filePath);
      let dir = path.dirname(filePath);
      if (base.startsWith('_')) {
        base = base.replace(/^_/, '.');
      } else if (base.includes('ComponentName')) {
        base = base.replace('ComponentName', ComponentName);
      }
      const targetFilePath = path.join(dir, base);
      renderTo(path.join(templateRoot, filePath), answers, path.resolve(process.cwd(), targetFilePath));
    });
  });
};