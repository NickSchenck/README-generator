// packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
// an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {type: 'input',
        message: 'Whats your projects title?',
        name: 'title'},

        {type: 'input',
        message: 'Describe your project:',
        name: 'description'
        },

        {type: 'input',
        message: 'How do you install your project?',
        name: 'install'
        },

        {type: 'input',
        message: 'How is your project used?',
        name: 'usage'
        },

        {type: 'input',
        message: 'What tests run with your project?',
        name: 'tests'
        },

        {type: 'input',
        message: 'How can people contribute to your project?',
        name: 'contribute'
        },

        {type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
        },

        {type: 'input',
        message: 'What is your email address?',
        name: 'email'
        },
        {
            name: "license",
            type: "list",
            message: "Choose your license:",
            choices: ["MIT", "Apache", "GPL", "BSD3"]
        }
    ]);
};

// function to initialize app
function init() { 
    questions()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Check out your new README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
