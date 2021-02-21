const standard_employee = require("./standard_employee");

class engineer extends standard_employee {
    constructor(name, id, email,classification, github) {
        super(name, id, email,classification);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = engineer;