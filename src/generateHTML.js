// function to create Manager card
const generateManager = function (manager) {
    return `
    <div class="card" style="width: 16rem;">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <span class="role">Manager</span> <i class="material-icons">coffee</i>
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
    <div class="card" style="width: 16rem;">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <span class="role">Engineer</span> <i class="material-icons">code</i>
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
    <div class="card" style="width: 16rem;">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <span class="role">Intern</span> <i class="material-icons">school</i>
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

            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');

    const generateEmployees = generateTeamProfile(employeeCards);
    return generateEmployees;

}

// generate html page
const generateTeamProfile = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">
                <h1>Team Profile</h1>
                </span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
}

module.exports = generateHTML;