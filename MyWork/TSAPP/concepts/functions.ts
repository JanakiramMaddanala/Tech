
let anonymous = function () {
    return "I am anonymous function;";
}

console.log(anonymous());


function ExploreDefaultParameters(salary = 10000, name: string) {
    return `${name} is earning ${salary}`;
}


console.log(ExploreDefaultParameters(undefined, "Janakiram"));

console.log(ExploreDefaultParameters(50000, "MR"));

function OptionalParameters(name: string, salary?: number) {
    return `${name} is earning ${salary}`;
}

console.log(OptionalParameters("Janakiram"));

console.log(OptionalParameters("MR"));

function ExploreRestParameters(name: string, ...parameters: number[]) {
    console.log(`${name}`);
    parameters.forEach(element => {
        console.log(element);
    });

    return parameters.length;
}

console.log(ExploreRestParameters("Ram", 9,9,8,9,9,9,6,5,9,4))