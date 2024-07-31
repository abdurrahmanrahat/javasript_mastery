const createFunction = () => {
    let funcArr = [];

    for (let i = 1; i < 6; i++) {
        funcArr.push(() => {
            console.log(i);
        })
    }

    return funcArr;
}

const funcArr = createFunction();
console.log(funcArr);
funcArr.forEach(fn => fn());