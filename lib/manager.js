const standard_employee = require("./standard_employee");

class manager extends standard_employee {
    constructor(name, id, email, classification, officeNumber, department) {
        super(name, id, email, classification, officeNumber, department);
        super.role = "manager";
        this.officeNumber = officeNumber;
        this.department = department;
        this.classification = classification;

        
        
    }
    getClassification(){
        return this.classification;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getDepartment() {
        return this.department;
    }
}

module.exports = manager;


