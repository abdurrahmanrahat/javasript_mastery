//------------ ES6+ Features -------- //

//---- Activity 01: Template Literals
const person = {
    name: "Rahat",
    age: 21
}
const str = `My name is ${person.name} and I am ${person.age}`
console.log(str);

const multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);

//---- Activity 02: Destructuring
const myArr = [1, 2, 3, 4, 5];

const [first, second] = myArr;
console.log(first, second);

const myObj = {
    bookTitle: "To Kill a Mockingbird",
    bookAuthor: "Harper Lee"
}
const { bookTitle, bookAuthor } = myObj
console.log(bookTitle, bookAuthor);

//---- Activity 03: Spread and Rest Operator
const newArr = [33, 6, 44, ...myArr, 100];
console.log(newArr);

const sumOfNumbers = (...numbers) => {
    console.log(numbers);
    const result = numbers.reduce((sum, number) => sum + number, 0);
    return result;
}
console.log(sumOfNumbers(3, 4, 6, 2, 7));

//---- Activity 04: Default parameter
const sumOfTwoNumbers = (number1, number2 = 2) => {
    return number1 + number2;
}
console.log(sumOfTwoNumbers(3));

//---- Activity 05: Enhanced Object Literals
const myName = "Khadija";
const myAge = 17;

const myBio = {
    myName, 
    myAge,

    // method
    greeting(){
        return `Hello ${this.myName}! Welcome to our home.`
    },

    // method with parameter
    updateAge(newAge){
        this.myAge = newAge
        return this.myAge;
    }
}

console.log(myBio);
console.log(myBio.greeting());
console.log(myBio.updateAge(22));

// object with computed property
const property1 = "name";
const property2 = "email";
const property3 = "phone";

const objWithComputedPro = {
    [property1]: "Sinthia",
    [property2]: "linthia@gmail.com",
    [property3]: "0383943948939"
}
console.log(objWithComputedPro);