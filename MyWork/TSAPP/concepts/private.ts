export class Animal {
    private name: string;
    constructor(theName: string) { 
        this.name = theName; 
    }
}

export class Rhino extends Animal {
    constructor() { 
        super("Rhino"); 
    }
}

export class Employee {
    private name: string;
    constructor(theName: string) { 
         this.name = theName;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible