//------------ Operators -------- //

//---- Activity 01: arithmetic operations
const result = 7 + 5
console.log(result); // 12

const result1 = 7 - 5;
console.log(result1); // 2

const result2 = 7 * 5;
console.log(result2); // 35

const result3 = 50 / 5;
console.log(result3); // 10

const result4 = 54 % 5; // remainder
console.log(result4); // 4

//---- Activity 02: assignment operator
let number1 = 5;
number1 += 2;
console.log(number1); // 7

let number2 = 5;
number2 -= 2;
console.log(number2); // 3

//---- Activity 03: comparison operator
const result5 = 5 < 7;
console.log(result5); // true

const result6 = 5 > 7;
console.log(result6); // false

const result7 = 5 <= 5;
console.log(result7); // true

const result8 = 5 >= 6;
console.log(result8); // false

const result9 = 4 == "4";
console.log(result9); // true

const result10 = 5 === "5";
console.log(result10); // false

//---- Activity 04: logical operator
const result11 = 3 < 4 && 4 === 4;
console.log(result11); // true

const result12 = 4 > 5 || 4 === 6;
console.log(result12); // false

const result13 = (4 > 5) || !(4 === 6);
console.log(result13); // true

//---- Activity 05: ternary operator
const number = 10;
const result14 = number < 1 ? "negative" : "positive";
console.log(result14); // positive