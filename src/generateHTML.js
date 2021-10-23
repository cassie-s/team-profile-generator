// function to create Manager card
const generateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>${manager.name}</h3>
        </div>
    
        <ul class="list-group list-group-flush card-body">
            <li class="list-group-item id">ID: ${manager.id}</li>
            <li class="list-group-item email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item office">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
};

// function to create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>${engineer.name}</h3>
        </div>
    
        <ul class="list-group list-group-flush card-body">
            <li class="list-group-item id">ID: ${engineer.id}</li>
            <li class="list-group-item email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
};

// function to create Intern Card
const generateIntern = function (intern) {    
return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>${intern.name}</h3>
        </div>
    
        <ul class="list-group list-group-flush card-body">
            <li class="list-group-item id">ID: ${intern.id}</li>
            <li class="list-group-item email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item school">School: ${intern.school}</li>
        </ul>
    </div>
    `;
};

// function to push array to page
generateHTML = (data) => {

    // array for cards
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(engineerCard);
        }
    }
}

module.exports = generateHTML;