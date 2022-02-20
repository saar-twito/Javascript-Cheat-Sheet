
// TRUTH & FALSY
console.log(false || 5); // If falsy print 5
console.log(true && 9); // If truthy print 6
console.log(true && true && 32); // If truthy print 32


// COOL SYNTAX TO UPDATE AN OBJECT
let person = {
    name: 'John',
    lastName: 'Dou',
    age: 36
}

person = { ...person, name: 'Saar' } // { name: 'Saar', lastName: 'Dou', age: 36 }



// DELETING A PROPERTY FROM AN OBJECT
const object = {
    name: "Saar",
    age: "23",
}
delete object.age
console.log(object); // Saar



