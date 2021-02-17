const standard_employee = require("./standard_employee");

class web_developer extends standard_employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = web_developer;