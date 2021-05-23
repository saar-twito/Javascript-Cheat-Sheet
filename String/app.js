// Split - used to split a string.array and returns the new array. 
// Note: The split() method does not change the original string.
// string.split(separator, limit) 
var sentence1 = "How are you";
console.log(`1 ${sentence1.split()}`); // copy the array - How are you
console.log(`2 ${sentence1.split("")}`); // H,o,w, ,a,r,e, ,y,o,u
console.log(`3 ${sentence1.split(" ", 3)}`); // How,are,you
console.log(`4 ${sentence1.split("o")}`); // H,w are y,u


// Substring - extracting the characters from a string by index and return the those characters as a string.
// string.substring(start, end)
var sentence2 = "Hello world!";
console.log(sentence2.substring(1, 4)); // ell
console.log(sentence2.substring(2)); // llo world!  
console.log(sentence2.substring()); // Hello world!



// Note: This method changes the original array.
// array.splice(index, howMany, item1, ....., itemX)
// Index - An integer that specifies at what position to add/remove/get items {R}
// howMany - The number of items to be removed {O}
var sign = ["A", "B", "C", "D"];
sign.splice(2, 0, "1", "2"); // [ 'A', 'B', '1', '2', 'C', 'D' ]
sign.splice(2, 2) // [ 'A', 'B' ]
sign.splice(2); // [ 'A', 'B' ]
console.log(sign)



// Slice -  return the selected element in new array
// array.slice(start, end - 1)
var numbers = [1, 2, 3, 4, 5]
console.log(numbers.slice()) // copy
console.log(numbers.slice(2)) // [ 3, 4, 5 ]   
console.log(numbers.slice(0, 2)) // [ 1, 2 ]


// The repeat() method returns a new string with a specified number of copies of the string it was called on.
const str = "Hello world!";
console.log(str.repeat(2))
