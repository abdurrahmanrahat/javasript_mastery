const addTwoNumbers = (number1, number2) => {
    return number1 + number2;
}

// 
const person = {
    name: "rahat",
    age: 21,

    greeting: function() {
        return `hello ${this.name}! how are you.`
    }
}

export {
    addTwoNumbers,
    person
};

