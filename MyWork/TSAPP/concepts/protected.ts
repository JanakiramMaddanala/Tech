export class Person {
    protected name: string;

    protected constructor(name: string){
        this.name = name;
    }

    getName(){
        return "";
    }
}

class Hero extends Person{
    constructor(name: string){
        super(name);
    }

    getName(){
        return this.name;
    }
}

let ram: Person = new Hero("");

console.log(ram.getName())