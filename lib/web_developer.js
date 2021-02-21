const standard_employee = require("./standard_employee");

class web_developer extends standard_employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
    }
    getGit() {
        return this.git;
    }
}

module.exports = web_developer;