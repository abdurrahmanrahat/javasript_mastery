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
// console.log(rahat);

// rahat.greeting();
// rahat.updateAge(22);

// inheritance here
class Student extends Person {
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    giveStudentId(){
        return this.studentId;
    }

    greeting(){
        console.log(`Override the greeting method by ${this.studentId}`);
    }
}

const student1 = new Student("Rahat", 21, "0011");
console.log(student1);
console.log(student1.giveStudentId());
student1.greeting();