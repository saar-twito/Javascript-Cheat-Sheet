// Not Working!
const add = (a, b) => {
  setTimeout(() => (a + b), 2000) // Goes to Node APIs
}
console.log(add(1, 4));


// setTimeout goes to Node APIs and waite until console.log will finished.
// So we print the add result that has not been executed yet so we get undefined.


// Working!
const add = (a, b, callback) => {
  setTimeout(() => callback(a + b), 2000)
}

add(1, 4, (sum) => console.log(sum))








