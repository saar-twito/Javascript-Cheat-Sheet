


// // Not Working!
// const add = (a, b) => {
//     setTimeout(() => (a + b), 2000) // Goes to Node APIs
// }
// console.log(add(1, 4));

// // First main, then above clg, then above add.
// // setTimeout goes to Node APIs and waite until main is over.
// // add is over, them clg is over, then main is over.
// // NOW, setTimeout returning value, but we cant catch is because 
// // add is nothing, and we clg nothing, means undefined.



// // Working!
// const add = (a, b, callback) => {
//     setTimeout(() => callback(a + b), 2000)
// }
// add(1, 4, (sum) => console.log(sum))








