export{}

// It is scoped only to the block in which it is defined. 

function getAmount(isSalary: boolean) {

    if(isSalary) {
        let salaryAmount = 10000;
        return salaryAmount;
    }

    //return salaryAmount; // Error due to insufficient access to the variable

    return 0;
}

function getAmountModified(isSalary: boolean) {
    
    let salaryAmount: number;

    try{
        if(isSalary) {
            salaryAmount = 10000;
            return salaryAmount;
        }

        throw "Can't give salary";
    }
    catch(e){
        console.log(e);
    }

    return salaryAmount;
}

console.log(getAmount(true));
console.log(getAmount(false));

console.log(getAmountModified(true));
console.log(getAmountModified(false));


