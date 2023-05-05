// TODO: Include packages needed for this application

const fs = require('fs')

const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
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
        type: 'checkbox',
        message: 'Add contents you would like to include in the Table of Content.',
        name: 'tableOfContent',
        choices: [
            'Installation',
            '\nUsage',
            '\nCredits',
            '\nLicense',
            '\nHow to Contribute',
            '\nTests',
            '\nQuestions',
        ]
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



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    // fs.writeFile(fileName, data)

    fs.writeFile(fileName, data,  (error) => {
        error? console.log(error): console.log('success')
    })
   

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            //it should be something README not the title? but how can i do??
            const fileName = `README.md`
// const fileName = `${data.title}.md`
            writeToFile(fileName, generateMarkdown(data))
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
        })
}

// Function call to initialize app
init();

