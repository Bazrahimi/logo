const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const promptUser = async() => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter your Logo-text. (should exceed three characters.',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter not more than three chracters'
        }
        return true;
      },

    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color (OR a hexadecimal number)',

    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):',
    },
  ]);

  return answers;
};




