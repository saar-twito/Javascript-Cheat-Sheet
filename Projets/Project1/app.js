
const E = require('./employee');

let e1 =  new E.Employee('Novin', 'Medina', 22, 'GoldenTape', 'Manager')
let e2 =  new E.Employee('Saar', 'Twito', 23, '10Bis', 'Delivery')

// Static method from Person class
E.Employee.smilePerson(e1.name, e1.lastName, e1.nameOfCompany);
E.Employee.smilePerson(e2.name, e2.lastName, e2.nameOfCompany);

// Normal method from Employee class
e1.sayGoodBye(`${e1.name} saying good bye`);
e1.sayGoodBye(`${e2.name} saying good bye`);

console.log(e1.patName)
