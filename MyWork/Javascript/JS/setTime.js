
function sayHi() {
    console.log('Hello');
}

// let timerId = setTimeout(sayHi, 5000);
// console.log(timerId.toString());
// console.log('-------------');
// clearTimeout(timerId);
// console.log(timerId);

let timerId = setInterval(sayHi, 1000);
console.log(timerId)
let timerid2 = setInterval(sayHi, 2000);
console.log(timerid2);

let clearTimeInterval = function(){
    clearInterval(timerId);
};

setTimeout(clearTimeInterval, 5000);

// setTimeout(() => console.log("World"), 0);


// console.log(1e9 - 1e6);

let start = Date.now();
// let times = [];
// console.log(start);
// setTimeout(function run() {
//     times.push(Date.now() - start); // remember delay from the previous call

//     if (start + 100 < Date.now()){
//         console.log(times); // show the delays after 100ms
//     } else {
//         setTimeout(run, 0); // else re-schedule
//     }

// }, 0);

// let user = {
//     name: "Ram",
//     callUser: function () {
//         console.log(this.name);
//     },
// }

// setTimeout(function () {
//     user.callUser();
// }, 1000);

// user.name = "M Janakiram";

// user.callUser = function () {
//     console.log(this.name + ` Hurray!`)
// }

