// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// If we dont set data in the Date constructor, it will take the current time
let time = new Date(2020, 3, 18, 13, 5, 35);
console.log(`Year : ${time.getFullYear()}`) // 2020
console.log(`Month 0 - 11 : ${time.getMonth()}`) // 0 - 11
console.log(`Number as day in month : ${time.getDate()}`) // 18
console.log(`Hours : ${time.getHours()}`) // 13
console.log(`Minutes : ${time.getMinutes()}`) // 5
console.log(`Second : ${time.getSeconds()}`) // 35
console.log(`Second : ${time.getDay()}`) //  0 - 6, Sunday - Saturday



// Check if the object is an instance of Date()
if (new Date() instanceof Date) return true;



// How to find the last day in a given month
lastDay = (year, month) => new Date(year, month, 0).getDate();


// How to compare dates
let date1 = new Date('11/14/2013');
let date2 = new Date('11/14/2014');

compareDates = (date1, date2) => {
    if (date1 > date2) return "Date1 > Date2";
    else if (date1 < date2) return "Date2 > Date1";
    else return "Date1 = Date2";
}
console.log(compareDates(date1, date2))

