// Split - used to split a string only and returns the new array. 
// string.split(separator, limit) 
const sentence1 = "How are you";
console.log(`${sentence1.split(" ")}`); // [How, are, you]
console.log(`${sentence1.split("o")}`); // [H,w, are, y,u]


// Substring - extracting the characters from a string by index and return the those characters as a string.
// string.substring(start, end)
const sentence2 = "Hello world!";
console.log(sentence2.substring(1, 4)); // ell
console.log(sentence2.substring(2)); // llo world!  



// Note: Only working on array.
// Note: This method changes the original array.
// array.splice(index, howManyToRemove, item1, ....., itemX)
// Index - An integer that specifies at what position to add/remove/get items {R}
const sign = ["A", "B", "C", "D"];
sign.splice(2, 0, "1", "2"); // [ 'A', 'B', '1', '2', 'C', 'D' ]
sign.splice(2, 2) // [ 'A', 'B' ]
sign.splice(2); // [ 'A', 'B' ]



// Slice - return the selected elements
// .slice(start, end - 1)
const numbers = [1, 2, 3, 4, 5] 
const numbersAsString = '123456' 

console.log(numbers.slice(2)) // [ 3, 4, 5 ] || "3456" 
console.log(numbers.slice(0, 2)) // [ 1, 2 ] || "12" 