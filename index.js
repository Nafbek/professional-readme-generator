//Packages needed for the application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

//A array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a short desciption of the app?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Write precise steps required to install the app.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions for using the app.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Give acknowledgement to your collaborators.',
        name: 'credit'
    },
    {
        type: 'list',
        message: 'Choose the license your app is covered under.',
        name: 'license',
        choices: [
            'MIT license',
            'Apache License 2.0',
            'GNU GPLv3',
            'GNU GPLv2',
            'BSD 2-Clause License',
            'ISC License (ISC)',
            'No License'
        ]
    },
    {
        type: 'input',
        message: 'Write a guideline for conributors.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Write tests for your app.',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Write your email.',
        name: 'email'
    }
];

//Write a data to the README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, generateMarkdown(data),  (error) => {
        error? console.log(error): console.log('README file has been generated!')
    })
 }

// Initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {   
            writeToFile(`README.md`, data)
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
        })
}

init();

