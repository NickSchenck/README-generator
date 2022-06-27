// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {type: 'input',
        message: 'What is the title of the project?',
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
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    console.log("Blepblorp")
    questions();
}

// Function call to initialize app
init();
