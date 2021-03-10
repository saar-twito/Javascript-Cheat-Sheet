// With call(), an object can use a method belonging to another object.

const person = {
    fullName(city, country) {
        console.log(`My name is ${this.firstName} ${this.lastName}, and i live in ${city}, ${country}`);
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");

