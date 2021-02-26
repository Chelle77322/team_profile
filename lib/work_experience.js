const standard_employee = require("./standard_employee");

class work_experience extends standard_employee {
    constructor(name, id, email,classification, officeNumber, school) {
        super(name, id, email, classification, officeNumber);
        this.school = school;
        super.role = "work_experience"
    }
    getSchool() {
        return this.school;
    }
}

module.exports = work_experience;