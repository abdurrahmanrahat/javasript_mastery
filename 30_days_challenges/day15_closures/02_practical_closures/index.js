const generateUniqueId = () => {
    let uniqueId = 10000;

    const generateId = () => {
        uniqueId++;
        return uniqueId;
    }

    return generateId;
}

const id = generateUniqueId();

console.log(id());
console.log(id());
console.log(id());

// 
const captureUserName = (username) => {

    const greeting = () => {
        return `hello ${username}! how are you?`;
    }

    return greeting;
}

const greeting = captureUserName("Rahat");
console.log(greeting());