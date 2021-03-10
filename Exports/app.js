const { hello, sayGoodBye, name } = require('./utils'); // Destructuring
const object = require('./utils'); // Normal object


// All Working!
hello();
sayGoodBye();
console.log(name);

object.hello();
object.sayGoodBye();
console.log(object.name); 