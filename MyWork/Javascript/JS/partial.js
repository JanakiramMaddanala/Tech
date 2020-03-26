// function double(a, b) {
//     return a * b;
// }

// double = double.bind(null, 2);

// console.log(double(3));
// console.log(double(4));

// let user = {
//     firstName: "John",
//     say(time, phrase) {
//         console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// };

// user.sayNow = partialSay(user.say, new Date());

// user.sayNow("Hello");

// function partialSay(func, ...argsFixed){
//     return function(...args){
//         func.call(this, ...argsFixed, ...args);
//     }
// }


/* Partial Function
1. Few of the function aruguments are fixed initally so that we can pass the rest of the
   parameters after that. Hence it is partial implemented function.
2. It mainly focus on fixed and dynamic args
3. Will not bother about this unlike bind()
*/

/* Bounded Function
1. The call to bind() creates a new object itself with the properties used inside the 
   function.
2. Sytax : let bindFunc = func.bind(this, arg1, arg2...)
*/