const standard_employee = require("./standard_employee");

class intern extends standard_employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = intern;