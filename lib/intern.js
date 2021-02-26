const standard_employee = require("./standard_employee");

class intern extends standard_employee {
    constructor(name, id, email,classification,officeNumber, uni) {
        super(name, id, email, classification, officeNumber);
        this.uni = uni;
        super.role = "intern";
    }
    getUniversity() {
        return this.uni;
    }
}

module.exports = intern;