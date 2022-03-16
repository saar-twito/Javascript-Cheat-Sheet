// split(string) - used to split a string only and returns the new array. 
// string.split(separator, limit) 
const sentence1 = "How are you";
// console.log(`${sentence1.split(" ")}`); // [How, are, you]
// console.log(`${sentence1.split("o")}`); // [H,w, are, y,u]



// substring(string) - extracting the characters from a string by index and return the those characters as a string.
// string.substring(start, end - 1)
const sentence2 = "Hello";
console.log(sentence2.substring(1, 4)); // ell
console.log(sentence2.substring(2)); // llo  



// slice() returns selected elements in an array, as a new array.
// .slice(start, end - 1)
const numbers = [1, 2, 3, 4, 5];
const numbersAsString = '123456';
console.log(numbers.slice(2)) // [ 3, 4, 5 ] 
console.log(numbersAsString.slice(0, 2)) // [ 1, 2 ]