const _ = require("lodash");

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// firstAndLast();
// slice();
// random();
// sample();
// shuffle();
// times();
// delay();
//determineType();
// minAndMax();
// sum();
// find();
// pull();
// partition();
// stringsCase();
// keysAndValues();
// forIn();
// orderBy();


function firstAndLast() {
    console.log(_.first(arr));
    console.log(_.last(arr));
}

function slice() {
    // [ 3, 4, 5, 6 ]
    console.log(_.slice(arr, 2, 6));
}

function random() {
    console.log(_.random(10)); // 0 -10
    console.log(_.random(7, 10)); // 7 - 10
}

function sample() {
    //  Pick a random element from an array
    console.log(_.sample(arr));
}

function shuffle() {
    // Shuffles a collection.
    console.log(_.shuffle(arr)); // Different order
    console.log(_.shuffle(arr)); // Different order again
}

function times() {
    // Executes the function n times.
    _.times(4, () => console.log("brave"));
}

function delay() {
    // delays the execution of a function for the specified amount of milliseconds.
    message = () => console.log("First message");
    _.delay(message, 2000);
    console.log("Second message");
}

function determineType() {
    // Determine the data type of a value.
    // Note** JSON.stringify will convert the value to string and keep show them as they are now:
    let values = [1, 2, 'good', [1, 2], { name: 'Peter', age: 32 }];

    values.forEach((item) => {

        if (_.isNumber(item))
            console.log(`${item} is a number`);

        if (_.isString(item))
            console.log(`${JSON.stringify(item)} is a string`); // "good"

        if (_.isArray(item))
            console.log(`${JSON.stringify(item)} is an array`); // [1,2]

        if (_.isObject(item))
            console.log(`${JSON.stringify(item)} is an object`);
    });
}

function minAndMax() {
    console.log(_.min(arr)); // 1
    console.log(_.max(arr)); // 8

    console.log(_.max(_.range(5, 25))); // 24
}

function sum() {
    console.log(_.sum(arr));
}

function find() {
    let users = [
        { name: 'John', age: 25 },
        { name: 'Lenny', age: 51 },
        { name: 'Peter', age: 81 },
        { name: 'Adam', age: 47 },
        { name: 'Robert', age: 72 }
    ];

    console.log(_.find(users, { name: 'Adam' }));
    console.log(_.find(users, (u) => { return u.age > 60; }));
    console.log(_.findLast(users, (u) => { return u.age > 60; }));
}

function pull() {
    // Removes all given values from the array.
    console.log(_.pull(arr, 1, 2));
}

function partition() {
    let [even, odd] = _.partition(arr, (e) => e % 2 === 0);
    console.log(even);
    console.log(odd);
}

function stringsCase() {
    let words = ["sky", "Sun", "Blue Island"];

    console.log(_.map(words, _.camelCase));
    console.log(_.map(words, _.capitalize));
    console.log(_.map(words, _.kebabCase));
    console.log(_.map(words, _.lowerCase));
    console.log(_.map(words, _.upperCase));
}

function keysAndValues() {
    let person = { age: 24, name: "Rebecca", occupation: "teacher" };
    console.log(_.keys(person));
    console.log(_.values(person));
}


function forIn() {
    let person = {
        age: 24,
        name: "Rebecca",
        occupation: "teacher"
    };
    _.forIn(person, (value, key) => console.log(`${key}: ${value}`));
}


function orderBy() {
    // Original array  
    var users = [
        { 'patron': 'Saar', 'age': 48 },
        { 'patron': 'Novin', 'age': 34 },
        { 'patron': 'Lenny', 'age': 40 },
        { 'patron': 'Ofri', 'age': 36 }
    ];

    let sorted = _.orderBy(users, ['patron', 'age'], ['asc', 'desc']);

    console.log(sorted);
}





