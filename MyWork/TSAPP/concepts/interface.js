"use strict";
exports.__esModule = true;
var ram = {
    name: "",
    message: "Awesome",
    address: "Hyderabad"
    // salary : 1000000,
};
var Developer = /** @class */ (function () {
    function Developer(name) {
        console.log(name);
    }
    return Developer;
}());
var newDeveloper = new Developer("");
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
