// What is this?
// The this keyword represented the object that called the function
// this in method -> references the object
// this in function -> references the global (window)
// Methods like call(), and apply() can refer this to any object.

// what is global - global is an object that can be access from anywhere, ergo "global".
// no variable being saved on the global object.


function global() {
    console.log(this);  // global
}

const object = {
    name: "Saar",
    age: 23,
    printThis() {
        console.log(this); // { name: 'Saar', age: 23, printThis: [Function: printThis] }
    }
}


// Error
const example2 = {
    eventName: "Birthday Party",
    guestList: ['Novin', 'Saar', 'Ofri'],
    printGuestList() {
        console.log(`Guest list for ${this.eventName}`);

        this.guestList.forEach(function (guest) {
            console.log(`${guest} is attending ${this.eventName}`);
        })
    }
}

// Working with that
const example3 = {
    eventName: "Birthday Party",
    guestList: ['Novin', 'Saar', 'Ofri'],
    printGuestList() {
        const that = this;
        console.log(`Guest list for ${this.eventName}`);

        this.guestList.forEach(function (guest) {
            console.log(`${guest} is attending ${that.eventName}`);
        })
    }
}

// Working arrow function 
const example4 = {
    eventName: "Birthday Party",
    guestList: ['Novin', 'Saar', 'Ofri'],
    printGuestList() {
        console.log(`Guest list for ${this.eventName}`);

        this.guestList.forEach((guest) =>
            console.log(`${guest} is attending ${this.eventName}`));
    }
}