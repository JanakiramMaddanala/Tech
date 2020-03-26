function sum() {
    console.log(arguments);
    console.log(arguments.length);
}

sum(1, 2, 3, 4, 5, 6);

let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [6, 7, 8, 9, 10];

let merged = [...numbers1, ...numbers2];

let maxValue = Math.max(...numbers1, 9, ...numbers2);

console.log(maxValue);

let message = "";
console.log(...message);

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
};

console.log(sum(1)(2)(3));