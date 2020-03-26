class Developer implements Person {
    name: string;
    id: number;

    constructor(){
        console.log(x);
    }
}

class CrazyDeveloper implements Person {
    name: string;
    id: number;

    constructor(){
        console.log(x);
    }
}

interface Person {
    name: string;
    id: number;
}

const x: number = 10;

function CreatePerson<T extends Person>(person: {new(): T}) : T{
    return new person();
}

let crazyDeveloper: Person = CreatePerson(CrazyDeveloper);