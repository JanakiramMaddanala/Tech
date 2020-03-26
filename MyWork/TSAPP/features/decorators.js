"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = "red";
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat color is " + this.color;
        },
        enumerable: true,
        configurable: true
    });
    Boat.prototype.pilot = function (speed, height) {
        throw Error();
        console.log("swish");
    };
    __decorate([
        property,
        __metadata("design:type", String)
    ], Boat.prototype, "color", void 0);
    __decorate([
        accessor,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Boat.prototype, "formattedColor", null);
    __decorate([
        logError("Oops, Boat was sunk on the road"),
        __param(0, parameter), __param(1, parameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], Boat.prototype, "pilot", null);
    Boat = __decorate([
        classDecorator
    ], Boat);
    return Boat;
}());
function parameter(target, key, index) {
    console.log(key, index);
}
function property(target, key) {
    console.log(target, key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (_a) {
                console.log(errorMessage);
            }
        };
    };
}
function accessor(target, key, desc) {
    desc.set = function (value) {
        console.log(value);
    };
}
function classDecorator(constructor) {
    console.log(constructor);
}
