"use strict";
exports.__esModule = true;
// It is scoped to the entire function 
function getAmount(isSalary) {
    if (isSalary) {
        var salaryAmount = 10000;
        return salaryAmount;
    }
    return salaryAmount;
}
console.log(getAmount(true));
console.log(getAmount(false));
