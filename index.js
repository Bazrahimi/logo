//Import the required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');

//function that prompt the user for input 
const promptUser = async() => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter your Logo-text. (should exceed three characters.',
      validate: (input) => {
        //Validation that text shouldnt be more than three characters
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
  //returing the user's answer
  return answers;
};

//immediately Invoked Function Epxression to execute the code
(async () => {
  //get the user Input
  const userInput = await promptUser();
  //Create SVG generator initiation
  const svgGenertor = new SVG(userInput);
  //generate SVG contennt
  const svgContent = svgGenertor.generateSVG();

  //Write the generated SVG contenet to a file
  fs.writeFileSync('./dist/logo.svg', svgContent);
  console.log('Generated logo.svg in ./dist/directory')

})();


