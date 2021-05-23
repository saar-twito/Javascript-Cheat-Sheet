//* If you want to assign a default value to a variable only if it is
//* either null or undefined, you can use the nullish coalescing operator

const foo = undefined ?? 'default string';
console.log(foo); // "default string"

const baz = null ?? 42;
console.log(baz); // 42

// ? *****************************
// ? *****************************

//* The ?? operator executes the right-side expression only if the
//* left-side expression returns anything other than null or undefined.

const func1 = () => null
console.log(func1() ?? "Hey There!"); // Hey There!

const func2 = () => 'Hello'
console.log(func2() ?? "Hey There!"); // Hello

// ? *****************************
// ? *****************************

//*  Default Values with ??=
//* If partTwo is null or undefined assign the value !
greetings = (partOne, partTwo) => {
    partTwo ??= "!";
    return partOne + partTwo;
};

// ? *****************************
// ? *****************************

//* The && operator
//* Longhand
if (isAuthorized)
    loadHomePage();


//* Shorthand
isAuthorized && loadHomePage();

// ? *****************************
// ? *****************************

// Checking if a Property Exists within an Object
person = {
    name: "John",
    age: 25,
    address: {
        city: "LA",
        state: "California",
    },
};

//* Longhand - if person is truthy
console.log(person && person.address && person.address.country); // undefined

//* Shorthand - if person is truthy
console.log(person?.address?.country); // undefined

// ? *****************************
// ? *****************************


//* Multiple Condition Checks
if (res === 25 || res === "twenty-five" || res === 25.0) {
    // some action here
}

//* Shorthand
if ([25, "twenty-five", 25.0].includes(res)) {
    // some action here
}

// ? *****************************
// ? *****************************



// ! Floor Value of a Number with ~~
//* Longhand
Math.floor(5.25) === 5 // true

//* Shorthand
~~5.25 === 5 // true