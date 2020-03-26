export { }

interface Person {
    name: string;
    readonly message: string;
    [key: string]: string; // Excess property
    // salary: number;
}

let ram: Person =
{
    name: "",
    message: "Awesome",
    address: "Hyderabad"
    // salary : 1000000,
};
class Employee implements Person {
    [key: string]: string; name: string;
    message: string;


}
class Developer implements Person {
    [key: string]: string;
    name: string;
    message: string;

    constructor(name: string) {
        console.log(name)
    }
}

let newDeveloper: Person = new Developer("");

interface Add {
    (firstNumber: number, secondNumber: number): number
}

let add: Add = function (a, b) {
    return a + b;
}

let add2: Add = (a, b) => a + b;

console.log(add2(1, 2));

class Driver{
    name: string;
    vehicle: string;
}

interface Pilot extends Driver {
    id: number
}

let ram1: Pilot = { name: "", vehicle:"Flight", id: 1};