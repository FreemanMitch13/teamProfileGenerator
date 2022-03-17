const inquirer = require('inquirer');

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
        },
    ])
