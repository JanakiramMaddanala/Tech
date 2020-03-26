export abstract class Person {
    static Identifier: number = 1;
    name: string;

    constructor(){
        Person.Identifier++;
    }

    abstract AbstractMethod() : string;
}


class Employee extends Person {

    static employeeNumber: number;

    AbstractMethod(): string {
        return "I am Abstract Method";
    }

    constructor(){
        super();
    }
}

let mr: typeof Employee = Employee;

console.log(mr.employeeNumber);

let mrImp: Employee = new mr();
console.log(mrImp.AbstractMethod())

let john: Person = new Employee();
console.log(Person.Identifier);

let jessy: Person = new Employee();
console.log(Person.Identifier);