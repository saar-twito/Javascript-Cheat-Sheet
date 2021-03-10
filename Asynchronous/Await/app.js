
// async
// Putting the async keyword before a function tells the function to return a Promise.
// It doesn't matter what the function does, if it is async, it will always return a promise.
// the function doesn't need to return a value.
// We always wait the Promise.


// await
// the await keyword can be used only inside an async function

// Error handling
// Using try-catch statement.


const add = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(x, y), 2000)
    })

}

async function getAddition(x, y) {
    try {
        console.log(await add(x, y));
    } catch (error) {
        console.log('Cant divide by zero');
    }
}
getAddition(5, 0);

