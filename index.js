const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the manager",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'employee id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'office number',
    message: "What is the office number?",
}
];

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the engineer",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'employee id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'github',
    message: "What is the github of engineer?",
}
];

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the intern",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'employee id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'school',
    message: "What is the school of the intern?",
}
];

const menuOptions = [{
    type: 'confirm',
    name: 'add-employee',
    message: 'Do you want to add an employee?',
    when: ""


},
{
    type: 'when',
    name: 'add-employee',
    message: 'Do you want to add an employee?'
},
{
    type: 'confirm',
    name: 'add-employee',
    message: 'Do you want to add an employee?'
}

]

// run manager questions first
// then run main menu with options to..
// Do you want to add an employee - yes: engineer or intern -no: quit to file
// Engineer
// Intern
// Do you want to add an intern
// quit- write to file