// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//creating a variable and using require function to bring in fs to write file 
const fs = require("fs");

const path = require("path");

//creating a variable and requiring generateMarkdown.js
var generateMarkdown = require(".util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        messege: "what is the title of the project",
        validate: (nameInput) => {
            if (nameInput) return true;
            else {
                console.log("please enter the title");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "id",
        messege: "Please enter the employee's ID",
        validate: (idInput) => {
            if(idInput) {
                return true;
            }  
        console.log("Please enter the employee's ID!");
        return false;

    }
},
{
    type: "input",
    name: "id",
    messege: "Please enter the employee's ID",
    validate: (idInput) => {
        if(idInput) {
            return true;
        }  
    console.log("Please enter the employee's ID!");
    return false;  
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();