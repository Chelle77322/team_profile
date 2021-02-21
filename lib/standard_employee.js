//Creating a class constructor to be used for an employee for the company. Constructor declares the values of name, id, email, classification
class standard_employee {
    constructor(name, id, email, classification) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.classification = classification;
        
    }
    getRole() {
        return this.constructor.name;
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
        return this.constructor.classification;
    }
}

module.exports = standard_employee;