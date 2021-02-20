//Calling all the required npm packages for this script file
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const intern = require("./intern");
const manager = require("./manager");
const line_manager = require("./line_manager");
const engineer = require("./engineer");
const web_developer = require("./web_developer");
const standard_employee = require("./standard_employee");
const work_experience = require("./work_experience");

const { start } = require("repl");

class App {
    constructor (){
        this.employees = []; //Empty array to store employees in
      this.addEmployee = [
           {
           
           type:"expand",
           name:"role",
           message: "Please select a role from the choices below: ",
           
           choices:[
               {key: "m", value:"manager"},
               {key:"l",value:"line_manager"},
               {key: "e", value:"engineer"},
               {key:"d", value:"web_developer"},
               {key:"s", value: "standard_employee"},
               {key: "i", value:"intern"}, 
               {key:"w", value:"work_experience"}, 
               {key: "f", value:"Finish"}     
                ]
       },
       {
           type: "input",
           message: "Please enter full name of employee",
           name: "name",
           when: (data) => data.role != "Finish",
           validate: name => {
               if (name){
                   return true;
               } else{
                   console.log("Please enter full name of employee");
                   return false;
               }
           }
       },
       {
           type: "input",
           message: "Please enter staff ID",
           name: "id",
           when: (data) => data.role != "Finish",
           validate: id => {
               if (id){
                   return true;
               } else{
                   console.log("Please enter a staff ID");
                    return false;
               }
           }
       },
       {
        type: "input",
        message: "Please enter staff email address",
        name: "email",
        when: (data) => data.role != "Finish",
        validate: email => {
            if (email){
                return true;
            } else{
                console.log("Please enter a valid email address");
                 return false;
            }
        }
    },
    {
        type: "input",
        message: "Please enter department",
        name: "department",
        when: (data) => data.role === "manager",
        validate: function (value) {
            return value.match(/^\d+$/) ? true : "Invalid department";
        }

    },
    {
        type: "input",
        message: "Please enter floor level",
        name: "floorLevel",
        when: (data) => data.role === "line_manager",
        validate: function (value) {
            return value.match(/^\d+$/) ? true : "Invalid floor level";
        }

    },

    {
        type: "input",
        message: "What is your github?",
        name: "github",
        when: (data) => data.role === "engineer",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter your github username.');
                return false;
            }
        }

    },
    {
        type: "input",
        message: "What is your current university?",
        name: "uni",
        when: (data) => data.role === "intern",
        validate: uni => {
            if (uni) {
                return true;
            } else {
                console.log('Please enter your university.');
                return false;
            }
        }
    }
       ];
    
    }

start() {
    this.nextEmployees();
}
//Call to the inquirer package
nextEmployees(){
inquirer.prompt(this.addEmployee).then (data=>{
    switch (data.role) {

        case "manager":
            this.employees.push(new manager(data.name, data.id, data.email, data.department));
            this.nextEmployees();
            break;
        case "line_manager":
            this.employees.push(new line_manager(data.name, data.id, data.email, data.floorLevel));
            this.nextEmployees();
            break;
        case "engineer":
            this.employees.push(new engineer(data.name, data.id, data.email, data.git));
            this.nextEmployees();
            break;
        case "web_developer":
            this.employees.push(new web_developer(data.name, data.id, data.email, data.github));
            this.nextEmployees();
            break;
        case "work_experience":
            this.employees.push(new work_experience(data.name, data.id, data.email, data.school));
            this.nextEmployees();
            break;
        case "intern":
            this.employees.push(new intern(data.name, data.id, data.email, data.uni));
            this.nextEmployees();
            break;
           
    }
});

}  
}
module.exports = App;
