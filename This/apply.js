// apply() is vary similar to  call(), the difference is that apply takes an argument as an array 

const person = {
    fullName(city, country) {
        console.log(`My name is ${this.firstName} ${this.lastName}, and i live in ${city}, ${country}`);
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);