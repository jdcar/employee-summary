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
                engineerInfo(response.name,response.employeeType.join(''),  response.id, response.email) 
            } else if (response.employeeType == "Intern") {
                internInfo(response.name, response.employeeType.join(''), response.id, response.email)
            } else if (response.employeeType == "Manager") {
                managerInfo(response.name, response.employeeType.join(''), response.id, response.email)
            }

        }));

}


// manager
function managerInfo(name, employeeType, id, email) {
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
            
            const manager = new Manager(name, employeeType, id, email, response.officeNumber)

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
function engineerInfo(name, employeeType, id, email) {
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
            
            const engineer = new Engineer(name, employeeType, id, email, response.github)

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

function internInfo(name, employeeType, id, email) {
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
            
            const intern = new Intern(name, employeeType, id, email, response.school)
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


// render()

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

