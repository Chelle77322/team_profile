//Calling all the required npm packages for this script file
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Calling all the additional script files with the constructor code
const time = require ("./scripts/time");
const line_manager = require ("./scripts/line_manager");
const web_developer = require  ("./scripts/web_developer");
const standard_employee = require ("./scripts/standard_employee");
const work_experience = require ("./scripts/work_experience");
const manager = require ("./scripts/manager");


//Validation Checks
const validation = {
    required: input => input !== '' ? true : "This field is required.",
    name: input => input !== '' ? true : "Please enter a name.",
    id: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive whole number.",
    email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address.",
    classification: input => input !== ''? true: "Please enter an employee classification"
}
//Asking for user input to enter a new team member
const required = {
    type: function() {
        return {
            message: "Which type of team member would you like to add?",
            type: "list",
            name: "member",
            choices: ["web_developer", "work_experience", "standard_employee"]
        }
    },
    item: function(member, variable, item = variable, validation) {
        return {
            message: `What is your ${member.toLowerCase()}'s ${item}?`,
            type: "input",
            name: variable,
            validate: validation
        }
    }
};
//Employee array to store input in
let employees = [];
// Calling an asynchronised function to add a new member to an existing role within the company
async function addRole(member) {
    let { name } = await inquirer.prompt(required.item(member, "name", "full name", validate.name));//awaiting user input via inquirer after prompting for it
    let { id } = await inquirer.prompt(required.item(member, "id", "ID number", validate.id));
    let { email } = await inquirer.prompt(required.item(member, "email", "email address", validate.email));
    let {classification} = await inquirer.prompt(required.item(member,"classification", validate.classification));
    
    switch (member) {
        case "Manager":
            let { officeNumber } = await inquirer.prompt(questions.item(member, "officeNumber", "office phone number", validate.required));
            employees.push(new Manager(name, id, email, officeNumber));
            break;
        case "Engineer":
            let { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username", validate.required));
            employees.push(new Engineer(name, id, email, github));
            break;
        case "Intern":
            let { school } = await inquirer.prompt(questions.item(member, "school", "school", validate.required));
            employees.push(new Intern(name, id, email, school));
            break;
    }
}