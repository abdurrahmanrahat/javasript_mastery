class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `I am ${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Abdur", "Rahman");
console.log(person1);
console.log(person1.fullName);

// 
class Person2 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `I am ${this.firstName} ${this.lastName}`;
    }

    set updateFullName(newName){
        const [firstName, lastName] = newName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person2 = new Person2("A", "R");
console.log(person2);
console.log(person2.fullName);

person2.updateFullName = "rahat hossain";
console.log(person2.fullName);