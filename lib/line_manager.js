const standard_employee = require("./standard_employee");

class line_manager extends standard_employee {
    constructor(name, id, email, officeNumber, floorLevel, classification) {
        super(name, id, email,classification);
        this.floorLevel = floorLevel;
        this.officeNumber = officeNumber;
        this.classification = this.classification
        
    }
    getfloorLevel(){
        return this.floorLevel;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = line_manager;