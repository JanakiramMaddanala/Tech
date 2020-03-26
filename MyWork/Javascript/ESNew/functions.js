function sample(a,b) {

}

console.log(sample.caller);
console.log(sample.name);
console.log(sample.prototype);
console.log(sample.arguments)

function multiply(num) {
    if(num) {
        return function multiply(anotherNumber) {
            return num * anotherNumber;
        }
    }

    return num;
}

console.log('----Multiply----');
console.log(multiply());
console.log(multiply(1)(2));


