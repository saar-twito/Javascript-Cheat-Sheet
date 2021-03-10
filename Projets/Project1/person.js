
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, im ${this.name} ${this.lastName}, and im ${this.age} years old`);
    }

    // In static method we cant use "this.name", because the output will be: 'Person is smiling'
    // So instead, use the following way:
    static smilePerson(name) {
        console.log(`${name} is smiling`); // output: Saar is smiling
    }
}

exports.Person = Person
