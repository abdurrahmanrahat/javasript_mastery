//------------ Promises and Async/Await -------- //

//---- Activity 01: Understanding Promises

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 2000)
})

// try {

// } catch (error) {
//     console.log(error);
// }
promiseOne
    .then(data => console.log(data))
    .catch(err => console.log(err))

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise rejected")
    }, 2000)
})
promiseTwo
    .then(data => console.log(data))
    .catch(err => console.log(err))
// try {

// } catch (error) {
//     console.log(error);
// }

//---- Activity 02: Chaining Promises
const action1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("server 01");
    }, 1000)
})

const action2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("server 02");
    }, 1000)
})

const action3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("server 03");
    }, 1000)
})

action1.then(data => {
    console.log(data)
    return action2;
}).then(data => {
    console.log(data);
    return action3;
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("Error from data fetching, ", err);
})

//---- Activity 03: Using Async/Await 
const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("async promise resolved");
    }, 2000)
})

const resolvedPromise = async () => {
    const response = await asyncPromise
    console.log(response);
}
resolvedPromise()

const asyncPromiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("async promise rejected");
    }, 2000)
})

const rejectedPromise = async () => {
    try {
        const res = await asyncPromiseReject
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
rejectedPromise()

//---- Activity 04: Fetching data from an API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log("data"))

const dataFetchedUsingAsync = async () => {
    const res = await fetch("https://api.github.com/users/abdurrahmanrahat");
    const data = await res.json();
    // console.log(data);
}
dataFetchedUsingAsync()

//---- Activity 05: Concurrent Promises
Promise.all([action1, action2, action3])
    .then(data => console.log(data))
    .catch(err => console.log(err))

Promise.race([action1, action2, action3])
    .then(data => console.log("promise.race", data))
    .catch(err => console.log(err))