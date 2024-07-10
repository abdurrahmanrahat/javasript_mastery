function sumOfSquares(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

const myArr = [2, 3, 2];
const result = sumOfSquares(myArr);
// console.log(result);

var firstName = "Abdur";
var lastName = "Rahman";
var fullName = firstName + " " + lastName;
// console.log(fullName);

var mangoes = 11;
var person = 2;
var remainder = mangoes % person;
// console.log(remainder);

// const numbers = [33, 45, 65, 76, 88]
// for(var i = 0; i < numbers.length; i++) {
//   var number = numbers[i];
//   if(number > 50){
//     continue;
//   }
//   console.log(number);
// }

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
// // console.log(citrus);

// const lyrics = "hello bjr jf kala dutj";
// const lyricsIndexValue = lyrics.indexOf("kala");
// console.log(lyricsIndexValue);

const lyrics =
  "tumi bondu kala pakhi ami jenon ki. bosonto kale bolte pari na. kala kala sada sada";
const sentences = lyrics.split(".");
// console.log(sentences);

const takeArrAndMakeAverage = (numbers) => {
  const total = numbers.reduce((sum, number) => sum + number, 0);
  const average = total / numbers.length
  return average
};

const numbers = [3, 5, 6, 3];
takeArrAndMakeAverage(numbers)