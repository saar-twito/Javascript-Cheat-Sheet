
// We have an a two ways to declare a functions,
// 1. function
// 2. Arrow function (=>) don't bind to 'this' keyword, for example:
const object = {
    name: 'saar',
    welcome: () => {
        console.log('hello' + this.name);
    }
}
object.welcome(); // Output = 'hello'

// So the rule of Arrow function are:
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible




// And pay attention that we have just one line of code so...
let a = params.reduce((accumulator, currentValue) =>
    accumulator + currentValue);


// If i don't have any parameters in my function
// we have to supply empty curly braces like this:
hello = () => {
    // do something..
    // do something..
    // do something..
    return `Hello World!`;
}

// And pay attention that we have just one line of code so...
hello = () => console.log(`Hello World!`);

hello = function () {
    console.log(`Hello World!`);
}

// If my function takes one parameter
hello = name => console.log(`Hello${name}!`);

// If my function takes more then one parameters
hello = (name, lastName) => console.log(`Hello${name}${lastName}!`);

// ****************************************************************

















