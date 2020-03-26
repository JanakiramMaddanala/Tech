function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}

var newFactorial = factorial;
factorial = null;
console.log(newFactorial(2));

var prev = 1, next = 2;

[prev, next] = [next, prev];

console.log(prev);
console.log(next);

