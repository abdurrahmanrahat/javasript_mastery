//------------ Function -------- //

//---- Activity 01: function declaration
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("number is even");
    } else {
        console.log("number id odd");
    }
}
isEvenOrOdd(11);

function squareOfNumber(number) {
    return number * number
}
console.log(squareOfNumber(3));

//---- Activity 02: function expression 
const maximumOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        console.log(`number 1 is high: ${num1}`);
    } else {
        console.log(`number 2 is high: ${num2}`);
    }
}
maximumOfTwoNumbers(4, 7);

const concatenateTwoStrings = function (str1, str2) {
    // return str1 + " " + str2
    // return str1.concat(str2)
    // return `${str1} ${str2}`
    return [str1, str2].join(" + ")
}
console.log(concatenateTwoStrings("Rahat", "Linthia"));

//---- Activity 03: arrow function
const sumOfTwoNumbers = (num1, num2) => {
    return num1 + num2
}
console.log(sumOfTwoNumbers(4, 5));

const checkSpecificString = (string, checker) => {
    return string.includes(checker)
}
console.log(checkSpecificString("hello", "o"));

//---- Activity 04: function parameters and default parameter
const multiplyingTwo = (a, b = 2) => {
    return a * b
}
console.log(multiplyingTwo(2, 4));

const sayGreeting = (personName, personAge = 21) => {
    return `hello ${personName}! wish you got married ASAP`
}
console.log(sayGreeting("Rahat", 22));

//---- Activity 05: higher order function
// example 01
const higherOrderFunc = (sayHello, num) => {
    for (let i = 1; i <= num; i++) {
        sayHello()
    }
}

function sayHello() {
    console.log("Hello!! Rahat.");
}

higherOrderFunc(sayHello, 3);

// example 02
const higherOrderFuncTwoParams = (func1, func2, number) => {
    const result = func1(number);
    return func2(result);
}

function sumOfNums(param) {
    return param + param;
}

function multiplyOfNums(param) {
    return param * param;
}

console.log(higherOrderFuncTwoParams(sumOfNums, multiplyOfNums, 3));