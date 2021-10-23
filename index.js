const inquirer = require('inquirer');

inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
    })