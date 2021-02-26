//Calling all the required npm packages for this script file
const fs = require("fs");
const inquirer = require("inquirer");


//Calling all script files for each of the roles from the lib directory
const intern = require ("./intern");
const manager = require("./manager");
const line_manager = require("./line_manager");
const engineer = require ("./engineer");
const web_developer = require ("./web_developer");
const work_experience = require ("./work_experience");


            
//Starts the call for the App constructor class to run
class App {
    constructor (){
    this.storeEmployee = []; //Empty array to store employees in
    this.promptAddEmployee = [
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
               {key: "f", value:"Finish"},  
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
        validate: department =>{
            
            if (department){
                return true;
            } else{
                console.log("Please enter a department");
                return false;
            }
            }
    },
    {
        type: "input",
        message: "What is your office phone number?",
        name: "officeNumber",
        when: (data) => data.role != "Finish",
        validate: function (value) {
            return value.match(/^\d+$/) ? true : "Invalid office number";
        }

    },
    {
        type: "input",
        message: "Please enter floor level",
        name: "floorLevel",
        when: (data) => data.role === "line_manager",
        validate: floorLevel =>{
            if (floorLevel){
                return true;
            } else{
                console.log("You must specify a floor level");
                return false;
            }
            
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
        message: "What is your github username?",
        name: "git",
        when: (data) => data.role === "web_developer",
        validate: git => {
            if (git) {
                return true;
            } else {
                console.log('Please enter your github username.');
                console.log(data);
                return false;
            }
        }

    },
    {
        type: "input",
        message: "What is your classification?",
        name: "classificatiion",
        when: (data) => data.role != "Finish",
        validate: classification => {
            if (classification) {
                return true;
            } else {
                console.log('Please enter your employee classification.');
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
    },
    {
        type: "input",
        message: "What is your current school?",
        name: "school",
        when: (data) => data.role === "work_experience",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter the name of your school.');
                return false;
            }
        }
    }
       ];
        
    }
//this will start the next employee prompt below after inital entry
start() {
    this.nextEmployees();
}
//Call to the inquirer package
nextEmployees(){
inquirer.prompt(this.promptAddEmployee).then (data =>{
 
    switch (data.role) {
        case "Finish":
            this.generateHTML();
            console.log("Staff Team Profile in creation");
           break;
       case "manager":
            this.storeEmployee.push(new manager(data.name, data.id, data.email,data.classification, data.department, data.OfficeNumber));
            
            this.nextEmployees();
            break;
        case "line_manager":
            this.storeEmployee.push(new line_manager(data.name, data.id, data.email,data.classification, data.floorLevel));
            this.nextEmployees();
            break;
        case "engineer":
            this.storeEmployee.push(new engineer(data.name, data.id, data.email, data.classification, data.github));
            this.nextEmployees();
            break;
        case "web_developer":
            this.storeEmployee.push(new web_developer(data.name, data.id, data.email,data.classification, data.git));
            this.nextEmployees();
            break;
        case "work_experience":
            this.storeEmployee.push(new work_experience(data.name, data.id, data.email, data.classification, data.school));
            this.nextEmployees();
            break;
        case "intern":
            this.storeEmployee.push(new intern(data.name, data.id, data.email,data.classification, data.uni));
            this.nextEmployees();
            break;
        }  
    // Can continue until exit clause is chosen
               
    });    
    }
    //Creates html by reading template files and adjusting them accordingly using string literals
    generateHTML(){
      
            fs.readFile('template/index.html', 'utf8', (err, createHTML) => {
            createHTML = createHTML.split("<script></script>").join(this.getTemplate());
            fs.writeFile('dist/team.html',createHTML, (err) => {
                    // throws an error,if you don't get caught there you get caught below in if condition
                    if (err) throw err;
                    // pass the errors and HTML is created in folder above
                    console.log('HTML file created');
                });
            });
        
        }
        //return javascript that generates an employee information card per employee in the employees list
        getTemplate() {
    
        var templateScript = ``;
          
            
            this.storeEmployee.forEach(Emp => {
                console.log(this.storeEmployee);
                var field = "";
                var iconImage = "";

                switch (Emp.getRole()) {
                    case "manager":
                        
                        field = `Department: ${Emp.getDepartment()}`;
                      
                         
                        break;
                    case "line_manager":
                        field = `Floor Level: ${Emp.getfloorLevel()}`;
                     
                        break;
                    case "engineer":
                         field =`github: ${Emp.getGitHub()}`;
                        break;
                        case "web_developer":
                            field =`github: ${Emp.getGit()}`;
                           break;

                    case "intern":
                        field = `uni: ${Emp.getUniversity()}`;
                        break;
                    case "work_experience":
                        field = `school: ${Emp.getSchool()}`;
                        break;
                }
    
                var cardGenerate = `
                <script>
                var col = $('<div class="col-4">');
                var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
                var header1 = $('<div class="card-header text-center h4">');
                header1.text("${Emp.getName()}");
                var header2 = $('<div class="card-header text-center">');
                
                header2.text(" ${Emp.getRole()}");
              
                var cardBody = $('<div class="card-body text-info">');
                var cardTitle = $('<h5 class="card-title">');
                cardTitle.text("Employee Information:");
                var cardText = $('<p class="card-text">');
                cardText.text("ID: ${Emp.getId()}");
                var cardText2 = $('<p class="card-text">');
                cardText2.text("Email: ${Emp.getEmail()}");
                var cardText3 = $('<p class="card-text">');
                cardText3.text("${field}");
                var cardText4 = $('<p class="card-text">');
                cardText4.text("${field}");
                var cardText5 = $('<p class="card-text">');
                cardText5.text("Classification: ${Emp.getClassification()}");

                var cardText6 = $('<p class="card-text">');
                cardText6.text = ("${field}");




                cardBody.append(cardTitle);
                cardBody.append(cardText);
                cardBody.append(cardText2);
                cardBody.append(cardText3);
        
                card.append(header1);
                card.append(header2);
                card.append(cardBody);
                col.append(card);
                $("#card").append(col);    
                </script>        
                `;
                templateScript += cardGenerate;
    
            });
            return templateScript;
        }
    }
module.exports = App;




 

    
 









