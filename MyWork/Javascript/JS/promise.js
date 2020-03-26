// let promise = new Promise((resolve, reject) => {
//     reject("Hello");
// });

// promise
//     .then(result1 => {
//         console.log(result1);
//         return result1 + " World!";
//     }, reason => {
//         console.log("Error" + reason);
//         return reason;
//     })
//     .then(result2 => {
//         console.log(`Inside result2 ${result2}`);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(result2), 1000);
//         })
//     })
//     .then(result3 => {
//         console.log(`Inside result3 ${result3}`);
//         return result3;
//     })
//     .then(null, reason => {
//         console.log(reason + " Error1!");
//         return reason;
//     })
//     .then(console.log);

// new Promise(function (resolve, reject) {
//     // setTimeout(() => {
//     //     throw new Error("Whoops!");
//     // }, 1000);
//     // console.log('another promise');
//     throw new Error("cool");
// })
// .catch(reason => {
//     console.log(`Inside ${reason}`);
// });

// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     then(resolve, reject) {
//         console.log(resolve.toString()); // function() { native code }
//         // resolve with this.num*2 after the 1 second
//         setTimeout(() => resolve(this.num), 1000); // (**)
//     }
// }

// new Promise(resolve => resolve({ id: 1, count: 2 }))
//     .then(result => {
//         return new Thenable(result); // (*)
//     })
//     .then(callBack) // shows 2 after 1000ms
//     .then(callBack)
//     .then(callBack);
// function callBack(value) {
//     console.log(value.count * 10)
//     return {count: value.count * 10};
// }


Promise.reject(1)
.then(console.log)
.catch(console.log)
.then(() => console.log("Finally"));


Promise.all(
    [
        new Promise(resolve => setTimeout(() => resolve(1), 5000)),
        new Promise((resolve, reject) => reject("Done!")),
        new Promise((resolve,reject) => setTimeout(() => reject("InPromiseAll") , 1000)).catch(err => "Error"),
        new Promise(resolve => setTimeout(() => resolve(100), 3000))
    ]
).then(results => {
    console.log(results);
})
.catch(console.log);

Promise.race(
    [
        new Promise(resolve => setTimeout(() => resolve(1), 5000)),
        new Promise(resolve => setTimeout(() => resolve(10), 1000)),
        new Promise(resolve => setTimeout(() => resolve(100), 3000))
    ]
).then(results => {
    console.log(results);
});