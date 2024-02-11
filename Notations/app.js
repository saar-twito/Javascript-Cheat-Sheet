

// The dot notation and bracket notation both are used to access the object properties in JavaScript.
// For 99.9% we use the dot notation
// We use the bracket notation when we don't know what property to print

let person = {
    name:'Saar',
    age: 23
}

// Acsses
console.log(person.age); // 23
console.log(person['age']); // 23

// Add keys
person.profession = 'Programer'
person['location'] = 'Israel'

// good
const update1 = (key,valeu) => {
   person[key] = valeu;
   console.log(person) // { name: 'Saar', age: 25 }
}

// bed
const update2 = (key,valeu) => {
   person.key = valeu;
   console.log(person) // { name: 'Saar', age: 25, key: 25 }
}

update1('age',25);
