export { };

const employeeSalary: number = 50000;



interface Person {
    firstName: string;
    lastName: string;
    fullName: string;

    greet();
    salary();
}

class Developer {
    fullName: string;
    designation: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${firstName}, ${lastName}`;
        this.designation = "";
    }

    greet() {
        console.log(`Welcome ${this.fullName}`);
    }

    salary() {
        console.log(`Your salary is ${employeeSalary} INR`);
    }

}

let person: Person = new Developer("", "");

person.greet();
person.salary();