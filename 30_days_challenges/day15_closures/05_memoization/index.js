function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        console.log("args", args);
        console.log("key from JSON.stringify", key);
        console.log("cache", cache);

        if (key in cache) {
            return cache[key];
        } else {
            const result = fn(...args);

            cache[key] = result;
            return result;
        }
    }
}

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(6, 5, 6));