/*index.js is the main piece, or compilier, for our README-GENERATOR app.*/
/*We first start with importing the functionality from generateMarkdown.js as the variable generateMarkdown. We also require inquirer- a
npm package for prompting users from a CLI, require fs- a built in tool for node known as the file system module, require util- a module
for providing a developer with helpful utility functionality, and define the variable writeFileAsync as a promisify of fs method
writeFile(this allows us to get promise-based methods from otherwise callback-based code, basically allowing for easier management of
asynchronous code).*/
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

/*questions is a function which defines all our prompts we'd like to ask the user. We simply return the .prompt method of our inquirer
variable, passing in an array of object-formatted questions which the user will be prompted with.*/
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        message: 'Whats your projects title?',
        name: 'title'
        },

        {
        type: 'input',
        message: 'Describe your project:',
        name: 'description'
        },

        {
        type: 'input',
        message: 'How do you install your project?',
        name: 'install'
        },

        {
        type: 'input',
        message: 'How does the user start your application?',
        name: 'usage'
        },

        {
        type: 'input',
        message: 'What tests run with your project?',
        name: 'tests'
        },

        {
        type: 'input',
        message: 'How can people contribute to your project?',
        name: 'contribute'
        },

        {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
        },

        {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
        },
        {
        name: "license",
        type: "list",
        message: "Choose your license:",
        choices: ["MIT", "Apache", "GPL", "BSD3", "N/A"]
        }
    ]);
};

/*init is a function which calls the questions function, and further affects it with .then methods. We start with a call to our questions
function, append a .then method which uses an anonymous function with a parameter of answers to invoke the writeFileAsync variable,
passing in 'README.md' as the file to path/write to, and a call the generateMarkdown with an argument of answers as the data which we'd
like to write. We append another .then method, using an anonymous function to console.log a string informing the user of their now
created README.md file. Last, we append a .catch method using an anonymous function with a parameter of err to console.log any errors
the app may encounter.*/
function init() { 
    questions()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Check out your new README.md'))
      .catch((err) => console.error(err));
  };

/*Here is a call to the init function. This call begins our app.*/ 
init();