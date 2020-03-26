export { }

function multiply(a: number, b: number): number

function multiply(a: string, b: string): string

function multiply(a: any, b: any): any {
    if (AreNumberArguments(a, b)) {
        return a + b;
    }

    return `${a},${b}`;
}

function AreStringArguments(a: any, b: any) : boolean {
    return (typeof (a) == "string" && typeof (b) == "string")
}

function AreNumberArguments(a: any, b: any) : boolean {
    return (typeof (a) == "number" && typeof (b) == "number")
}


console.log(multiply(1,2));

console.log(multiply("", ""));


