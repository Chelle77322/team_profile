const standard_employee = require("./standard_employee");

class line_manager extends standard_employee {
    constructor(name, id, email, classification,officeNumber,floorLevel) {
        super(name, id, email,classification,officeNumber, floorLevel);
        this.floorLevel = floorLevel;
        
        super.role = "line_manager";
        
    }
    getfloorLevel(){
        return this.floorLevel;
    }
    
}

module.exports = line_manager;