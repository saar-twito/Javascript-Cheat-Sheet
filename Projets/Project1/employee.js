
const P = require('./person');

class Employee extends P.Person {
    constructor(name, lastName, age, nameOfCompany, professional) {
        super(name, lastName, age)
        this.nameOfCompany = nameOfCompany;
        this.professional = professional;

    }

    sayHello() {
        super.sayHello(); // Call the base method or do something else
        // Some code
    }
    sayGoodBye(massage) {
        console.log(massage)
    }
}


exports.Employee = Employee
