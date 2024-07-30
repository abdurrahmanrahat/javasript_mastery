class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // static method
    static genericGreeting() {
        console.log("Hello! from Static method.");
    }
}

const rahat = new Person("Rahat", 21);

//------- static methods from here

Person.genericGreeting();

// 
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.totalStudent++
    }

    // static property
    static totalStudent = 0;
}

console.log(Student.totalStudent);
const student1 = new Student("Rahat", 21, "0011");
const student2 = new Student("Rahat", 21, "0011");
console.log(Student.totalStudent);



