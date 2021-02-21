const standard_employee = require("./standard_employee");

class manager extends standard_employee {
    constructor(name, id, department, email, officeNumber, floorLevel) {
        super(name, id, email,classification);
        this.floorLevel = floorLevel;
        this.officeNumber = officeNumber;
        this.department = department;
        
    }
    getfloorLevel(){
        return this.floorLevel;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getDepartment() {
        return this.department;
    }
}

module.exports = manager;


