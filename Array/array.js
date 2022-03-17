
let fruits = ["Apple", "Orange"];

// ForIn
for (let key in fruits)
    console.log(key); // 0 1

// ForOf
for (let value of fruits)
    console.log(value) // "Apple", "Orange"



// A Set is a collection of items which are unique,
// means, element cant be repeated.
let duplicatesArray = [1, 1, 2, 3, 3, 5, 5, 6, 5];
let uniqueArray = [...new Set(duplicatesArray)];
console.log(uniqueArray) // [ 1, 2, 3, 5, 6 ]



let params = [65, 44, 12, 4];
// Reduce()
// accumulator - The pile of our result, also the first item in the array if we didn't define a default value like 0
// currentItem - the current item {65} then {44}...

let a = params.reduce((total, next) => total + next, 0);
console.log(a); // 21



let myNumbers = [65, 44, 12, 4];
// ForEach(item, index)
// item - The current item in myNumbers array.
// index - The index of current item.

// forEach doesn't return anything, its impact on the original array
myNumbers.forEach((item, index) => myNumbers[index] = item * 10);



// Map()
// Map is basically the same thing like forEach BUT
// Map returning a new array.
let myNumbers = [65, 44, 12, 4];

let a = myNumbers.map((item) => item * 4)
console.log(a); // [260, 176, 48, 16]


// Filter()
// The filter() method creates a new array with all elements that pass the test 
let greaterTen = numbers.filter(number => number > 10);
console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]


// Find()
// Get the first item in the array that match this condition.
// If you find that item don't check the remaining items.
let ages = [3, 10, 18, 20];
let adults = ages.find(n => n > 10) // 18



// FindIndex()
// What the index of the first item that was match
let index = ages.findIndex(n => n > 10); // 2



// Some() 
// Will look for the first item that match the condition.
// return true if found and stop executing, else return false and stop executing.
let ages = [3, 9, 21, 15]
let a = ages.some((n => n > 18));
console.log(a); // true



// Every()
// Checks if all the item in an array pass a test.
// If items pass the test returns true, else return false, and do not check the remaining items.
let ages = [3, 9, 21, 15]
let a = ages.every((n => n > 2));
console.log(a); // true


// Note: splice only working on array.
// Note: This method changes the original array.
// array.splice(index, howManyToRemove, item1, ....., itemX)
// Index - An integer that specifies at what position to add/remove/get items {R}
const sign = ["A", "B", "C", "D"];
sign.splice(2, 0, "1", "2"); // [ 'A', 'B', '1', '2', 'C', 'D' ]
sign.splice(2, 2) // [ 'A', 'B' ]
sign.splice(2); // [ 'A', 'B' ]

