var anonymous = function () {
    return "I am anonymous function;";
};
console.log(anonymous());
function ExploreDefaultParameters(salary, name) {
    if (salary === void 0) { salary = 10000; }
    return name + " is earning " + salary;
}
console.log(ExploreDefaultParameters(undefined, ""));
console.log(ExploreDefaultParameters(50000, ""));
function OptionalParameters(name, salary) {
    return name + " is earning " + salary;
}
console.log(OptionalParameters(""));
console.log(OptionalParameters(""));
function ExploreRestParameters(name) {
    var parameters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parameters[_i - 1] = arguments[_i];
    }
    console.log("" + name);
    parameters.forEach(function (element) {
        console.log(element);
    });
    return parameters.length;
}
console.log(ExploreRestParameters("", 9, 9, 8, 9, 9, 9, 6, 5, 9, 4));
