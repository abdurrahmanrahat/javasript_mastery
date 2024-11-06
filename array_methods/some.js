const array = [1, 2, 3, 4, 5];


// if it match with with 3rd index, then return true and did not check next values
console.log(array.some((element) => {
    console.log("element", element)

    return element === 2
}));
// Expected output: true