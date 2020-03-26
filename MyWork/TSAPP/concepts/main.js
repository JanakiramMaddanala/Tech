"use strict";
exports.__esModule = true;
var employeeSalary = 50000;
var Developer = /** @class */ (function () {
    function Developer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ", " + lastName;
        this.designation = "";
    }
    Developer.prototype.greet = function () {
        console.log("Welcome " + this.fullName);
    };
    Developer.prototype.salary = function () {
        console.log("Your salary is " + employeeSalary + " INR");
    };
    return Developer;
}());
var person = new Developer("", "");
person.greet();
person.salary();
