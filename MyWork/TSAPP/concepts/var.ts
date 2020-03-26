export{}
// It is scoped to the entire function 

function getAmount(isSalary: boolean) {
    if(isSalary) {
        var salaryAmount = 10000;
        return salaryAmount;
    }

    return salaryAmount;
}

console.log(getAmount(true));
console.log(getAmount(false));


