const standard_employee = require("./standard_employee");

class manager extends standard_employee {
    constructor(name, id, email, officeNumber, floorLevel) {
        super(name, id, email);
        this.floorLevel = floorLevel;
        this.officeNumber = officeNumber;
        
    }
    getfloorLevel(){
        return this.floorLevel;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = manager;