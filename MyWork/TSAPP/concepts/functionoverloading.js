"use strict";
exports.__esModule = true;
function multiply(a, b) {
    if (AreNumberArguments(a, b)) {
        return a + b;
    }
    return a + "," + b;
}
function AreStringArguments(a, b) {
    return (typeof (a) == "string" && typeof (b) == "string");
}
function AreNumberArguments(a, b) {
    return (typeof (a) == "number" && typeof (b) == "number");
}
console.log(multiply(1, 2));
console.log(multiply("", ""));
