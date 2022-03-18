const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const positions = {Manager: [], Engineer: [], Intern: []};

function questions(){
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team members name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the team members id(number)?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team members email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the team members role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            default: 'Engineer'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers Github Username?',
            when: (answers) => answers.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the intern studying at?',
            when: (answers) => answers.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Do you want to add another employee?'
        } 
    ]).then(ans => {
        ans.role === "Manager"
        ? positions.Manager.push(new Manager(...Object.values(ans)))
        : ans.role === "Engineer"
        ? positions.Engineer.push(new Engineer(...Object.values(ans)))
        : positions.Intern.push(new Intern(...Object.values(ans)));
        ans.addEmployee
        ? questions() 
        : console.log(positions);
    });
}


questions();