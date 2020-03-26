function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(Person.prototype.constructor);


var person = new Person();
console.log(person.constructor);
console.log(Person.prototype.isPrototypeOf(person));
console.log(Object.getPrototypeOf(person));
console.log(person.hello)

var namePropertyDescriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(namePropertyDescriptor);
console.log(Object.keys(Person.prototype));
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log("name" in person);
console.log("constructor" in person);
console.log("toString" in person);
console.log("notThere" in person);

Person.prototype = {
    salary: 10000,
    sayHi: function() {
        return "Hi";
    }
}

var person1 = new Person();
console.log(Person.prototype.constructor);
console.log(person1.constructor);

console.log(Person.prototype.constructor);
console.log(person.constructor);

console.log(Object.keys(person));
console.log(Object.keys(person1));

function Car() {
}


