//------------ Array -------- //

//---- Activity 01: array creation and access
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[0]); // first index of the array
console.log(myArr[myArr.length - 1]); // last index of the array

//---- Activity 02: basic array methods
myArr.push(6);
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift(11);
console.log(myArr);

//---- Activity 03: intermediate array methods
const dabbleNumbers = myArr.map(number => number * 2);
console.log(dabbleNumbers);

const evenNumbers = myArr.filter(number => number % 2 === 0);
console.log(evenNumbers);

const sumOfMyArr = myArr.reduce((sum, number) => sum + number, 0);
console.log(sumOfMyArr);

//---- Activity 04: array iteration
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

myArr.forEach(number => {
    console.log(number);
});

//---- Activity 05: two dimensional array
const twoDimensionalArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [8, 5, 3, 2]
]
console.log(twoDimensionalArr);

console.log(twoDimensionalArr[0]);
for(let i = 0; i < twoDimensionalArr.length; i++){
    console.log(twoDimensionalArr[i]);
}