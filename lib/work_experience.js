const standard_employee = require("./standard_employee");

class work_experience extends standard_employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = work_experience;