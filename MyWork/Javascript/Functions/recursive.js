var factorial = function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * factorial(num-1);
    }
};

var newFactorial = factorial;
factorial = null;
console.log(newFactorial(2));
