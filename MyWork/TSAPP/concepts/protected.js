"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return "";
    };
    return Person;
}());
exports.Person = Person;
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name) {
        return _super.call(this, name) || this;
    }
    Hero.prototype.getName = function () {
        return this.name;
    };
    return Hero;
}(Person));
var ram = new Hero("");
console.log(ram.getName());
