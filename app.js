const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { start } = require("repl");


// Write code to use inquirer to gather information about the development team members,

let employees = []

// 
employeeInfo()



function employeeInfo() {
    inquirer
        .prompt([
            {
                type: "checkbox",
                name: "employeeType",
                message: "Employee type?",
                choices: ["Engineer", "Intern", "Manager"]
            },
            {
                type: "input",
                name: "name",
                message: "Employee name?"
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "Email?"
            }

        ])
        .then((response => {

            if (response.employeeType == "Engineer") {
                response.name
                engineerInfo(response.name,  response.id, response.email) 
            } else if (response.employeeType == "Intern") {
                internInfo(response.name, response.id, response.email)
            } else if (response.employeeType == "Manager") {
                managerInfo(response.name, response.id, response.email)
            }

        }));

}


// manager
function managerInfo(name, id, email) {
    inquirer
        .prompt([
           
            {
                type: "input",
                name: "officeNumber",
                message: "Office number?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another employee?"
            }
        ])
        .then((response => {
            
            const manager = new Manager(name, id, email, response.officeNumber)

            if (response.addAnother) {
                employees.push(manager)
                console.log(employees)
                employeeInfo()
            } else {
                employees.push(manager)
                console.log(employees)
                render(employees)
            }
        }));

}
// engieer
function engineerInfo(name, id, email) {
    inquirer
        .prompt([
           
            {
                type: "input",
                name: "github",
                message: "Github username?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another employee?"
            }
        ])
        .then((response => {
            
            const engineer = new Engineer(name, id, email, response.github)

            if (response.addAnother) {
                employees.push(engineer)
                console.log(employees)
                employeeInfo()
            } else {
                employees.push(engineer)
                console.log(employees)
                render(employees)
            }

        }));

}
// intern

function internInfo(name, id, email) {
    inquirer
        .prompt([
           
            {
                type: "input",
                name: "school",
                message: "School name?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another employee?"
            }

        ])
        .then((response => {
            
            const intern = new Intern(name, id, email, response.school)
            console.log(intern)

            if (response.addAnother) {
                employees.push(intern)
                console.log(employees)
                employeeInfo()
            } else {
                employees.push(intern)
                console.log(employees)
                render(employees)
            }

        }));
}




// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.




