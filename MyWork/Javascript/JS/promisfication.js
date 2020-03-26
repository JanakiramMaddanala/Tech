function loadNumbers(numbers, callback) {
    for (const number of numbers) {
        console.log(number);
    }

    callback(1, undefined);
}


function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(result, error) {
                if(result){
                    console.log(result);
                    resolve(`result: ${result}`);
                }

                if(error){
                    reject(error);
                }
            }
            args.push(callback)
            func.call(this, ...args);
        })
    }
}


function callback() {
    for (const argument of arguments) {
        console.log(argument);
    }
}

let loadNumbersPromise = promisify(loadNumbers);
console.log(loadNumbersPromise([1, 2, 3, 4, 5]))

loadNumbersPromise([1, 2, 3, 4, 5]).then(result => console.log(result));
console.log(loadNumbersPromise([1, 2, 3, 4, 5]))


// new Promise((resolve,reject) => {
//     console.log("hi");
//     resolve()
// }).then(() => console.log("hi again"));

// console.log("come on ");