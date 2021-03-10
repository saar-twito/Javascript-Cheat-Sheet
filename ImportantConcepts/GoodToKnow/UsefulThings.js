


// Compare if the properties of two object is equal
var person1 = { name: "bob" };
var person2 = { name: "bob" };

if (JSON.stringify(person1) === JSON.stringify(person2))
    console.log(true);


// Get the first char at index....
let str = "HELLO WORLD";
let res = str.charAt(0); // H


// Check if array...
Array.isArray(object); // True or False


// Hot to create a new array from exists arrays
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
const arr3 = ['e', 'f'];
let arr4 = arr1.concat(arr2, arr3);


const myArray = [1, 2, 3, 4, 5];

Number.isInteger(5) // True or False



// Convert array of string to int
const arrString = ["1", "2", "3", "4"];
const arrNumbers = arrString.map(Number);
console.log(arrNumbers);  // [1,2,3,4];


// Convert array of int to string
const arrNumbers = [1, 2, 3, 4];
const arrString = arrNumbers.map(String);
console.log(arrString); // ['1','2','3','4']





