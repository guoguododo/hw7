// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'Add Tiltle of the Repo',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please add Title');
                return false;
            }
        }
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Add Description of the Repo',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please add Description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please type installation info',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please add installation info!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'Please type Usage Information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please add Usage Information!');
                return false;
            }
        }
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'Please type Contributione Information',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please add Contributione Information!');
                return false;
            }
        }
    },
    // Test Instruction
    {
        type: 'input',
        name: 'testing',
        message: 'Please type Test Instruction',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please add Test Instruction!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'Choose License for your Repo',
        choices: ['GNU', 'ISC', 'MIT', 'Apache', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            }
        }
    },
// Github Username
{
    type: 'input',
    name: 'github',
    message: 'Please type GitHub Username',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please add GitHub username!');
            return false;
        }
    }
},
// Email Address
{
    type: 'input',
    name: 'email',
    message: 'Please add your email?',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw new err;
        console.log('Completed!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
