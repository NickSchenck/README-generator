// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your projects name? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your projects name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "descript",
            message: "Describe your project. (Required)",
            validate: descriptInput => {
                if (descriptInput) {
                    return true;
                } else {
                    console.log("Please enter a desciption for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "How do you install your project? (Required)",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please detail how a user would install your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "use",
            message: "How/what would a user implement your project for? (Required)",
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log("Please describe why a user would want your project.");
                    return false;
                }
            }
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
