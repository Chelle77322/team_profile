const standard_employee = require("./standard_employee");

class manager extends standard_employee {
    constructor(name, id, email, classification, officeNumber, department) {
        super(name, id, email, classification);
        this.officeNumber = officeNumber;
        this.department = department;
        
        super.role = "manager";

        
        
    }
 
    getDepartment() {
        return this.department;
    }
}

module.exports = manager;


