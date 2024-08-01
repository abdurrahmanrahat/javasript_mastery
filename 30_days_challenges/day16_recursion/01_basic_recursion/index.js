const factorial = (n) => {
    if(n === 0 || n === 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(2));

// 

const fibonacci = (n) => {
    if(n <= 1){
        return n;
    } else {
        return fibonacci(n -1) + fibonacci(n -2);
    }
}

console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55