export class Person{
       constructor(private firstName: string,private lastName: string){

    }

    get fullName(){
        return `${this.firstName}, ${this.lastName}`;
    }
}

let ram: Person = new Person("", "");

console.log(ram.fullName);