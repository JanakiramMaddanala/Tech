// // function expression
// this.sayHello = function(message){
//     console.log(message);
// };
// // inside an object as method
// let user = {
//     sayHello: function(message){
//         console.log(message);
//     }
// };

// // IIFE Immediately Invoked Function expression
// (function(){
//     console.log("Hello Javascript!");
// })();

// this.sayHello = function hello(message){
//     if(message){
//         console.log(this.sayHello);
//         console.log(message);
//     }
//     else{
//         hello("Good Morning!");
//     }
// }

// sayHello("Welcome");

let factorial = function (n) {
    return n == 1 ? 1 : n * factorial(n - 1) ;
}

console.log(factorial.toString());
console.log(factorial(4));
