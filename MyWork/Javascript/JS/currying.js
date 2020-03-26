function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            console.log(`if args more: ${this}`)
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log(`if args less: ${this}`)
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));


/*
1. Transforms a normal function with fixed number of arguments into callable function
    ex: sum(a,b,c) as sum(a)(b)(c)
*/