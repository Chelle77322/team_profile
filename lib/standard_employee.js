//Creating a class constructor to be used for an employee for the company. Constructor declares the values of name, id, email, classification
class standard_employee {
    constructor(name, id, email, classification) {
        name = name;
        id = id;
        email = email;
        classification = classification;
        
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
}

module.exports = standard_employee;