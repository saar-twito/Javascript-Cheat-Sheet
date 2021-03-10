
// TRUTH & FALSY
let a;
let b = 9;
let c = 10;

console.log(a || 5); // If a falsy print 5
console.log(b && 9); // If b truthy print 6
console.log(b && c && 32); // If b and c truthy print 32


// COOL SYNTAX TO UPDATE AN OBJECT
let person = {
    name: 'John',
    lastName: 'Dou',
    age: 36
}

// Take the properties from the person object and update just the name
person = { ...person, name: 'Saar' } // { name: 'Saar', lastName: 'Dou', age: 36 }
const person5 = { ...person, name: 'Novin' } // { name: 'Novin', lastName: 'Dou', age: 36 }



// DELETING A PROPERTY FROM AN OBJECT
const object = {
    name: "Saar",
    age: "23",
}
delete object.age
console.log(object); // Saar



