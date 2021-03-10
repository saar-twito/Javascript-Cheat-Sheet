
hello = () => console.log('Hello');
goodBye = () => console.log('GoodBye');
const firstName = 'Saar'


// All Working!

// For one item
// Note: the name must be left === right
module.exports.hello = hello
exports.hello = hello


// For multiple items
module.exports = {
    hello,
    sayGoodBye: goodBye,
    name: firstName
}
