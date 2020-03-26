export { }

interface Swim {
    length: number;
}

class NormalSwim implements Swim {
    length: number;
    constructor() {

    }
}

function measureSwimLength<T extends Swim>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let normalSwim: Swim = new NormalSwim();
normalSwim.length = 10;

measureSwimLength(normalSwim)

interface GenericFunction {
    <T extends number>(name: string, salary: T): T
}

let genericFunction: GenericFunction = <T extends number>(name: string, salary: T) => <T>(salary * 100);

console.log(genericFunction("", 1000));

interface GenericClass<T> {
    name: T;
    genericFunction(arg: T): T;
}

function getPropertyValue<T, P extends keyof T>(type: T, property: P) {
    return type[property];
}

let propertyValue = getPropertyValue({ name: "", salary: 10000 }, "name");

console.log(propertyValue);
