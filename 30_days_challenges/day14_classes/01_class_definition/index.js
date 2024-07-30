class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    updateAge(newAge){
        console.log(this.age);
        this.age = newAge;
        console.log(this.age);
    }
}

const rahat = new Person("Rahat", 21);
console.log(rahat);

rahat.greeting();
rahat.updateAge(22);