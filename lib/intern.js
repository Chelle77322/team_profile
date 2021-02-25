const standard_employee = require("./standard_employee");

class intern extends standard_employee {
    constructor(name, id, email,classification, uni) {
        super(name, id, email, classification, uni);
        super.role = "intern";
        this.uni = uni;
    }
    getSchool() {
        return this.uni;
    }
}

module.exports = intern;