const parentFunc = () => {
    const myName = "Rahat";
    return childFunc = () => {
        console.log(myName);
    }
}

const innerFunc = parentFunc();
innerFunc();

// 
const counterFunc = () => {
    let count = 0;

    const increment = () => {
        count++;
    }

    const getCount = () => {
        return count;
    }

    return {
        increment,
        getCount
    }
}

const {increment, getCount} = counterFunc();

increment();
increment();

console.log(getCount());