//------------ Control Structure -------- //

//---- Activity 01: if..else statement
const number = 8;

if (number < 0) {
    console.log("Number is negative");
} else if (number === 0) {
    console.log("Number is zero");
} else if (number > 0) {
    console.log("Number is positive");
}

const age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//---- Activity 02: nested if else statement
const number1 = 15;
const number2 = 11;
const number3 = 9;

if (number1 > number2) {
    if (number1 > number3) {
        console.log(`number ${number1} is the height`);
    } else {
        console.log(`number ${number3} is the height`);
    }
} else {
    console.log(`number ${number2} is the height`);
}

//---- Activity 03: switch case statement
const number4 = 7;

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
switch (number4) {
    case 1: console.log("Saturday");
        break;

    case 2: console.log("Sunday");
        break;

    case 3: console.log("Monday");
        break;

    case 4: console.log("Tuesday");
        break;

    case 5: console.log("Wednesday");
        break;

    case 6: console.log("Thursday");
        break;

    default: console.log("Friday");
        break;
}

//---- Activity 04: conditional ternary operator
const number5 = 6;

const result = number5 % 2 === 0 ? "Even" : "Odd";
console.log(result);

//---- Activity 05: combining conditions
const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("leap year");
} else {
    console.log("isn't lear year");
}