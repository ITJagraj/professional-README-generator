// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//creating a variable and using require function to bring in fs to write file 
const fs = require("fs");

const path = require("path");

//creating a variable and requiring generateMarkdown.js
var generateMarkdown = require(".util/generateMarkdown");
const { type } = require('os');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //writing file and syn it using path to join the working dir using the fileName
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        type: "input",
        name: "username",
        messege: "Enter your Github username"
    },
    {
        
    }

    ])
}

// Function call to initialize app
init();