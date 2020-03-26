"use strict"
var person = {
    id: 1,
    name: '',
    _age: 26,
}
Object.defineProperty(person, 'salary', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 62000,
})

person.salary = 50000;

Object.defineProperty(person, "age", {
    get: function() {
        return this._age;
    },
    set: function(newAge) {
        this._age = newAge;
    },
    enumerable: true,
})

person.__defineGetter__("designation", function() {
    return "Consultant";
})

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const element = person[key];
        console.log(key, ':', element);
        
    }
}