// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// an array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Give a brief project description.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Describe any necessary installation steps.',
        name: 'installInstructions',
      },
      {
        type: 'input',
        message: 'List any usage information.',
        name: 'usageInfo',
      },
      {
        type: 'input',
        message: 'List any contribution guidelines.',
        name: 'guidelines',
      },
      {
        type: 'input',
        message: 'List any test instructions.',
        name: 'testInstruct',
      },
      {
        type: 'list',
        message: 'What license do you want to use?',
        choices: ['MIT', 'Mozilla', 'Boost', 'GNULGPLv3', 'Apache', 'None'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
      },
      {
        type: 'input',
        message: 'What is your linkedIn username?',
        name: 'linkedInUsername',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ])

    .then((data) => {
      const readmeTxt = generateMarkdown(data);
      generateMarkdown(data);
      fs.writeFile('readmeOutput.md', readmeTxt, (err) =>
        err ? console.error(err) : console.log('Success! You have a README!')
      );
    });
}

// function call to initialize app
init();