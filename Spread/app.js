const person = {
    name: 'John',
    lastName: 'Dou',
    age: 36
}

// The spread operator means COPY! and not reference.
const person2 = { ...person }
person2.name = 'Saar'

console.log(person); // { name: 'John', lastName: 'Dou', age: 36 }
console.log(person2); // { name: 'Saar', lastName: 'Dou', age: 36 }

// const person3 =  ...person // Error