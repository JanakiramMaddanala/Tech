"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var CustomArray = /** @class */ (function () {
    function CustomArray(collection) {
        this.collection = collection;
    }
    CustomArray.prototype.get = function (index) {
        return this.collection[index];
    };
    return CustomArray;
}());
exports.CustomArray = CustomArray;
// Generic Function
function print(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item);
    }
}
print([1, 2, 3]);
// Generic Constraint
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house');
    };
    return House;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am car');
    };
    return Car;
}());
function printHouseOrCars(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHouseOrCars([new House(), new House(), new Car()]);
