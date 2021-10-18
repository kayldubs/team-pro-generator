const generateHTML = require('./src:/generateHTML');

const Manager = require('./lib:/Manager');
const Intern = require('./lib:/Intern');
const Engineer = require('./lib:/Engineer');

const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');

const teamArray = [];

const addManager = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'WHat is this Managers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message:'Enter this managers email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Manager's office number"
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    Add employees to team listing
    `);

    return inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose this employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name:'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID number"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter this employee's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter users Github link."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter this inter's school.",
            when: (input) => input.role === 'Intern' 
        },
        {
            type: 'confirm',
            name: 'confirmAddEmpolyee',
            message: 'Would you like to add another team memeber?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeInfo;
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        }

        teamArray.push(employee);
        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist:/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created! Check out the index.html in dist!')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });