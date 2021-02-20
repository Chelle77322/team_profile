const standard_employee = require("./standard_employee");

class engineer extends standard_employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = engineer;