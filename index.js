const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the manager?",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'officeNumber',
    message: "What is the office number?",
}
];

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the engineer?",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'github',
    message: "What is the github username of engineer?",
}
];

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the intern?",
}, {
    type: 'input',
    name: 'email',
    message: "What is the email?",
},
{
    type: 'input',
    name: 'id',
    message: "How is the employee id?",
},
{
    type: 'input',
    name: 'school',
    message: "What is the school of the intern?",
}
];

const menuOptions = [{
    type: 'list',
    name: 'addEmployee',
    message: 'Do you want to add an employee?',
    choices: ['Engineer', 'Intern', 'No']
}
];

let employees = [];

const promptManagerQuestions = () => {
    return inquirer.prompt(managerQuestions);
}

const promptEngineerQuestions = () => {
    return inquirer.prompt(engineerQuestions);
}

const promptInternQuestions = () => {
    return inquirer.prompt(internQuestions);
}

// run manager questions first
promptManagerQuestions()
    .then(answers => {
        const { name, id, email, officeNumber } = answers;
        employees.push(new Manager(name, id, email, officeNumber));
        addEmployee();
    })

function addEmployee() {
    // then run main menu with options
    return inquirer.prompt(menuOptions)
    .then(answers => {
        // Do you want to add an employee - yes: engineer or intern -no: quit to file
		if (answers.addEmployee == 'Engineer')
    // Do you want to add an Engineer
			promptEngineerQuestions()
				.then(answers => {
					const {name, id, email, github} = answers;
					employees.push(new Engineer(name, id, email, github));	
					addEmployee();	
				});
		else if (answers.addEmployee == 'Intern')
        // Do you want to add an Intern
			promptInternQuestions()
				.then(answers => {
					const {name, id, email, school} = answers;
					employees.push(new Intern(name, id, email, school));
					addEmployee();
				});
		else if (answers.addEmployee == 'No')
        // Do you want to add an employee -no: quit- write to file
			generateHTMLtoFile();

	});
}

function generateHTMLtoFile() {
    fs.writeFile('./dist/index.html', generateHTML(employees), err => {console.log(err);});
}



