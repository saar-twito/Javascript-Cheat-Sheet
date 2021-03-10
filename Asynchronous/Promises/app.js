
// Promise is an object that holds the eventual result of an asynchronous operation:
// value or an error.

// Promise has 3 state:
// Pending - when it doing async operations.
// Fulfilled - when async operations done successfully and i will have a value. 
// Rejected - if something went wrong with the async operations and i will have an error. 

// Always return something: (resolve or reject)


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(a / b), 2000)
    })

}
add(1, 0).then((sum) => console.log(sum))
    .catch(() => console.log('Cant divide by zero'));