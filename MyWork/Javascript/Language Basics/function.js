console.log(sum.toString());
console.log(sum.valueOf().toString());


var newSum = sum;

console.log(newSum(10,10));

sum = function(a,b) {
    return 2*a + b;
}

console.log(sum(10,10));
console.log(newSum(10,10));

function sum(a, b) {
    return a + b;
}


