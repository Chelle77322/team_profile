//Creating a class constructor to be used for an employee for the company. Constructor declares the values of name, id, email, classification
class standard_employee {
    constructor(name, id, email, classification, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.classification = classification;
        this.officeNumber = officeNumber;
        this.role = "standard_employee";
        
    }
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getClassification(){
        return this.classification;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = standard_employee;