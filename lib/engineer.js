const standard_employee = require("./standard_employee");

class engineer extends standard_employee {
    constructor(name, id, email,classification,officeNumber, github) {
        super(name, id, email,classification, officeNumber);
        this.github = github;
        super.role = "engineer";
        
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = engineer;

