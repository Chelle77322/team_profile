const standard_employee = require("./standard_employee");

class web_developer extends standard_employee {
    constructor(name, id, email,classification, officeNumber, git) {
        super(name, id, email,classification, officeNumber, git);
        this.git = git;
        super.role = "web_developer";
    }
    getGit() {
        return this.git;
    }
}

module.exports = web_developer;