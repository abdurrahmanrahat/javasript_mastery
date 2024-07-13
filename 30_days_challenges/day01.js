//------------ Variables and data types -------- //

//---- Activity 01: variable declaration
var number = 47;
console.log(number);

let string = "Rahat";
console.log(string);

//---- Activity 02: constant declaration
const boolean = true;
console.log(boolean);

//---- Activity 03: data types
const number1 = 71;
console.log(typeof number1); // number

const string1 = "Rahman";
console.log(typeof string1); // string

const boolean1 = false;
console.log(typeof boolean1); // boolean

const obj = {
    name: "Rahat",
    age: 21
}
console.log(typeof obj); // object

const myArr = ["a", "b", "c", 1, 2, 3, true];
console.log(typeof myArr); // object

//---- Activity 04: reassigning variables
let reassignValue = "hello";
console.log(reassignValue); // hello

reassignValue = false;
console.log(reassignValue); // false

//---- Activity 05: understanding const variable
const observeError = "try to reassign it";
console.log(observeError);

// observeError = "Changed!!"; // TypeError: Assignment to constant variable.
console.log(observeError); // not come here as throw error the  above line

//---- Feature Request 01: variable types console log
const number2 = 71;
console.log(number2, "is a type of", typeof number2); // 71 is a type of number

const string2 = "Rahman";
console.log(string2, "is a type of", typeof string2); // Rahman is a type of string

const boolean2 = false;
console.log(boolean2, "is a type of", typeof boolean2); // false is a type of boolean

const obj1 = {
    name: "Rahat",
    age: 21
}
console.log(obj1, "is a type of", typeof obj1); // { name: 'Rahat', age: 21 } is a type of object

const myArr1 = ["a", "b", "c", 1, 2, 3, true];
console.log(myArr1, "is a type of", typeof myArr1); // ["a", "b", "c", 1, 2, 3, true] is a type of object