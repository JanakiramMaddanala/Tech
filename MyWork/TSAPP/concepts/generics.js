"use strict";
exports.__esModule = true;
var NormalSwim = /** @class */ (function () {
    function NormalSwim() {
    }
    return NormalSwim;
}());
function measureSwimLength(arg) {
    console.log(arg.length);
    return arg;
}
var normalSwim = new NormalSwim();
normalSwim.length = 10;
measureSwimLength(normalSwim);
var genericFunction = function (name, salary) { return (salary * 100); };
console.log(genericFunction("", 1000));
function getPropertyValue(type, property) {
    return type[property];
}
var propertyValue = getPropertyValue({ name: "", salary: 10000 }, "name");
console.log(propertyValue);
