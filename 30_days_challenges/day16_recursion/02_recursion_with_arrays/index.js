const sumOfArr = (myArr) => {
    if(myArr.length === 0){
        return 0;
    }  else {
        return myArr[0] + sumOfArr(myArr.slice(1));
    }
}

console.log(sumOfArr([5, 7, 5]));
console.log(sumOfArr([2, 6, 8]));

// 

const findMaxNumberOfArr = (myArr) => {
    if(myArr.length === 1){
        return myArr[0];
    } else {
        const max = findMaxNumberOfArr(myArr.slice(1));
        return myArr[0] > max ? myArr[0] : max;
    }
}

console.log(findMaxNumberOfArr([5, 7, 5]));
console.log(findMaxNumberOfArr([2, 6, 8]));