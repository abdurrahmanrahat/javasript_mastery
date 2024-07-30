//------------ Error Handling -------- //

//---- Activity 01: Basic error handling with Try-Catch
try {
    const throwError = () => {
        throw new Error("Error from throw.");
    }
    throwError();
} catch (error) {
    console.log(error.message);
}

const divideTwoNumbers = (numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return numerator / denominator;
    } catch (error) {
        // console.log(error.message);
        return error.message;
    }
}
console.log(divideTwoNumbers(10, 5));

//---- Activity 02: Finally block
try {
    console.log("try block");
    // throw new Error("throw err");
} catch (error) {
    console.log("catch error");
} finally {
    console.log("finally block");
}

//---- Activity 03: Custom error objects
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
    }
}

try {
    throw new AppError("Custom Error by Rahat");
} catch (error) {
    console.log(error.message);
}

// 
const validateUserInput = (input) => {
    if (input === "") {
        throw new AppError("Empty string is not allowed.");
    } else {
        console.log(input);
    }
}

try {
    validateUserInput("");
} catch (error) {
    console.log(error.message);
}

//---- Activity 04: Error handling in Promises
const myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2)
    console.log(random);
    if (random === 0) {
        resolve("resolved promise");
    }
    else {
        reject("rejected promise");
    }
})

myPromise.then(data => console.log(data)).catch(err => console.log(err));

// 
const asyncFunc = async () => {
    try {
        const data = await myPromise
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
asyncFunc();

//---- Activity 05: Graceful error handling in Fetch
fetch("https//:3443/users")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message))

// 
const fetchRequest = async () => {
    try {
        const res = await fetch("https//:3443/posts");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

fetchRequest()
