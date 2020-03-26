// Object Creation
let obj = new Object();
console.log(obj);

let literalObj = {};
console.log(literalObj);

// Computed Property is more like dynamic in C#. 
// It should be safely accessed via sqare bracket notation.
// __proto__ is special one which can't be assigned to non-objects.
let propertyName = "grade";

let student = {
    [propertyName]: 10,
    name: "Ram",
    __proto__: 20,
}
console.log(student[propertyName]);
console.log(student.__proto__);

// Property Value Shorthand
function createUser(name, age) {
    return {
        name,
        age,
    }
}

let user = createUser("Ram", 24);
console.log(user);

// Property Existence Check
console.log(user.mr === undefined);
console.log("name" in user);

// for in loop
for (key in user) {
    console.log(key);
}

for (let property in user) {
    console.log(property)
}

// Object.assign - Copies all the properties from source to destination
let source1 = {
    name: "Ram",
}

let source2 = {
    age: 24,
}

let dest = {};

Object.assign(dest, source1, source2);

console.log(dest);

console.log("Properties");
for (let key in source1) {
    console.log(key);
}

for (let value of source1) {
    console.log(value);
}