const generateHTML = require('./src/generateHTML');

// team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// required nodules
const fs = require('fs');
const inquirer = require('inquirer');

// empty array to push in team profiles
const teamProfiles = [];

// prompt for manager
const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "Please enter the team manager's name:",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log("Please enter the team manager's name!");
              return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's employee ID.",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('---The employee ID must be a number---')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email address",
        validate: function(email) {
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                return true
            } else {
                console.log('---You must enter a valid email!---')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (isNaN(officeNumberInput)) {
                console.log('---The office number must be a number---')
                return false;
            } else {
                return true
            }
        }
    }
])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamProfiles.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Please choose the employee's role.",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name.", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter an employee's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
        validate: idInput => {
            if  (isNaN(idInput)) {
                console.log ('---The employee ID must be a number---')
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email address",
        validate: function(email) {
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                return true
            } else {
                console.log('---You must enter a valid email!---')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Please enter the employee's github username!")
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's school!")
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
])
    .then(employeeData => {
        // data for employee types

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);;
        
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamProfiles.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamProfiles);
        } else {
            return teamProfiles;
        }
    })
};

// function to generate HTML page file using file system
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been successfully generated! See index.html.')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamProfiles => {
        return generateHTML(teamProfiles);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });