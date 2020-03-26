// let user = {
//     name: "",
//     age: 30,
//     smile(){
//         console.log(`\u{1F60D}`)
//     }
// };

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));


// console.log(Object.getOwnPropertyNames(user));

// user.smile();


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sumOfSalaries = function (salaries) {
    let salaryValues = Object.values(salaries);
    let sum = 0;

    for (const salary of salaryValues) {
        sum += salary;
    }

    return sum;
}

console.log(sumOfSalaries(salaries));

let user = {
    name: 'John',
    age: 30
};

console.log(`-------User Keys Count--------`);
console.log(Object.keys(user).length);

let numbers = [1,2,3,4,5];

numbers.filter((value) => value < 3).values();