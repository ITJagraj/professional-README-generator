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
    // inquirer prompted questions for user//VIA command-line prompts
    inquirer.prompt([
        {
            // Takes user text input
            type: "input",
            name: "username",
            message: "Enter Your Github Username"
        },
        {
            // Takes user text input
            type: "input",
            name: "email",
            message: "Enter Your Email Address"
        },
        {
            // Takes user text input
            type: "input",
            name: "title",
            message: "What's Your Projects Name?"
        },
        {
            // Takes user text input
            type: "input",
            name: "description",
            message: "Enter A Descrition For Your Project"
        },
        {
            // Takes user text input
            type: "input",
            name: "installation",
            message: "Enter Your Projects Installation Instructions"
        },
        {
            // Takes user text input
            type: "input",
            name: "usage",
            message: "Enter Usage Info"
        },
        {
            // Takes user text input
            type: "input",
            name: "contribution",
            message: "Enter Your Project Contribution Guidelines"
        },

// Function call to initialize app
init();