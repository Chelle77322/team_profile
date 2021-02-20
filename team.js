//Calling all the required npm packages for this script file
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

//Needed to create and read created files
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Calling all the additional script files for each constructor
const time = require ("./lib/time");
const line_manager = require ("./lib/line_manager");
const web_developer = require  ("./lib/web_developer");
const standard_employee = require ("./lib/standard_employee");
const work_experience = require ("./lib/work_experience");
const manager = require ("./lib/manager");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");

//Validation Checks
const validation = {
    required: input => input !== '' ? true : "This field is required.",
    name: input => input !== '' ? true : "Please enter a name.",
    id: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive whole number.",
    email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address.",
    classification: input => input !== '' ? true: "Please enter an employee classification",
    officeNumber: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a phone number.",
    floorLevel: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive whole number.",
    department: input => input !== '' ? true: "Please enter a department",

}
//Asking for user input to enter a new team member
function userInput(){
        return inquirer.prompt([ {
            message: "Which type of team member would you like to add?",
            type: "list",
            name: "member",
            choices: ["web_developer", "work_experience", "intern","standard_employee", "line_manager", "engineer", "Work Team Build Complete"]
        }
    ]);
}
function validateUser(member, variable, item = variable, validation){

    
            return {
                message: `What is your ${member.toLowerCase()}'s ${item}?`,
                type: "input",
                name: variable,
                validate: validation
            }
        }

//Employee array to store input in
let employees = [];

// Calling an asynchronised function to add a new member to an existing role within the company
async function addRole(member) {
    let { name } = await inquirer.prompt(userInput.item(member, "name", "full name", validate.name));//awaiting user input via inquirer after prompting for it
    let { id } = await inquirer.prompt(userInput.item(member, "id", "ID number", validate.id));
    let { email } = await inquirer.prompt(required.item(member, "email", "email address", validate.email));
    let {classification} = await inquirer.prompt(required.item(member,"classification", validate.classification));
    
    switch (member) {

        case "manager":
            let { department} = await inquirer.prompt(questions.item(member, "officeNumber", "office phone number","floor level", "department", validate.required));
            employees.push(new manager(name, id, department, email, officeNumber, floorLevel));
            break;
        case "line_manager":
            let { officeNumber } = await inquirer.prompt(questions.item(member, "officeNumber", "office phone number","floor level", validate.required));
            employees.push(new line_manager(name, id, email, officeNumber, floorLevel));
            break;
        case "engineer":
                let { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username", validate.required));
                employees.push(new engineer(name, id, email, github));
                break;
        case "web_developer":
            let { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username", validate.required));
            employees.push(new web_developer(name, id, email, github));
            break;
        case "work_experience":
            let { school } = await inquirer.prompt(questions.item(member, "school", "school", validate.required));
            employees.push(new work_experience(name, id, email, school));
            break;
        case "intern":
            let { school } = await inquirer.prompt(questions.item(member, "school", "school", validate.required));
            employees.push(new intern(name, id, email, school));
            break;
    }

  
}

function getHTMLModule(file) {
    return readFile(file, "utf8");
}

async function generateHTML() {
    let Template = {
        index: await getHTMLModule("./template/index.html"),
        standard_employee: await getHTMLModule("./template/standard_employee.html"),
        manager: await getHTMLModule("./template/manager.html"),
        line_manager: await getHTMLModule("./template/line_manager.html"),
        web_developer: await getHTMLModule("./template/web_developer.html"),
        engineer: await getHTMLModule("./template/engineer.html"),
        work_experience: await getHTMLModule("./template/work_experience.html"),
        intern: await getHTMLModule("./template/intern.html")
    }

    let standard_employeeHTML = "";

    for (let standard_employee of employees) {
        let html = Template[standard_employee.constructor.name]
        .replace(/{% name %}/gi, standard_employee.name)
        .replace(/{% id %}/gi, standard_employee.id)
        .replace(/{% email %}/gi, standard_employee.email);
        switch (standard_employee.constructor.name) {
            case "manager":
                html = html.replace(/{% department %}/gi, standard_employee.department);
                break;
            case "line_manager":
                html = html.replace(/{% floorLevel %}/gi, standard_employee.floorLevel);
                break;
            case "web_developer":
                html = html.replace(/{% github %}/gi, standard_employee.github);
                break;
            case "engineer":
                html = html.replace(/{% github %}/gi, standard_employee.github);
                break;
            case "work_experience":
                html = html.replace(/{% school %}/gi, standard_employee.school);
                break;
            case "intern":
                html = html.replace(/{% school %}/gi, standard_employee.school);
                break;
        }
        standard_employeeHTML += html;
    }
    let completeHTML = Template["index"].replace(/{% employees %}/gi, standard_employeesHTML);

    createHTML(completeHTML);
}

async function createHTML(html) {
    console.log("Creating HTML...");
    let file = `team-${time()}.html`;
    let dir = "./dist";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    await writeFile(`${dir}/${file}`, html);
    console.log(`HTML has been created to "${dir}/${file}".`);
    return;
}

async function init() {
    console.log("Please build your work team");
    await addRole("manager");
    let member = "";
    let exit = "Work Team Build Complete";
    while (member != exit) {
        let { member } = await inquirer.prompt(userInput.type());
        if (member === exit) {
            return generateHTML();
        }
        await addRole(member);
    }
}

init();