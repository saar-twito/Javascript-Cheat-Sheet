

object1 = (key, value) => {
    return { key: value }
}

// Long Way
object2 = (key, value) => {
    let obj = {}
    obj[key] = value
    return obj
}


// ES6 Computed Property Names
object3 = (key, value) => {
    return { [key]: value }
}
console.log(object1('name', 'Tyler')); // { key: 'Tyler' }
console.log(object2('name', 'Tyler')); // { name: 'Tyler' }
console.log(object3('name', 'Tyler')); // { name: 'Tyler' }