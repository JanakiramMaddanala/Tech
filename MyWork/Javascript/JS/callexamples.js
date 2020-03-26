// Example 1
// function work(a, b) {
//     console.log(a + b); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// };

// function spy(func){
//     function wrapper(...args){
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];

//     console.log(wrapper);

//     return wrapper;
// }

// Example 2
function f(x) {
    // console.log(this === global);
    // console.log(this.x);
    console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms

function delay(func, delayTime) {

    function wrapper(...value) {

        let currentThis = this;
        console.log(`inside wrapper : ${currentThis === global}`);
        // console.log(this);

        setTimeout(function () {
            console.log(`inside setTimeout : ${this == global}`);
            // console.log(this);
            func.apply(this, value);
            console.log(`---------------------------`);
            console.log(`---------------------------`);

        }, delayTime);

    }

    return wrapper;
}
