function sumOfSquares(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

const myArr = [2, 3, 2];
const result = sumOfSquares(myArr);
console.log(result);
