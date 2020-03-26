function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

console.log(A.prototype);
console.log(B.prototype);
console.log(a.__proto__);
console.log(a instanceof B); // true

// Symbol.species : Classes extending built-in classes can return built-in type using this. 
//                  Otherwise, it is always the custom class object returned back.
/*
    static get [Symbol.species](){
        return Array;
    }

1. Symbol.hasInstance
   For custom implementation. To check if an object is an instance of something.
   static [Symbol.hasInstance](obj){
       if(obj.<prop>){
           return true;
       }
   }

2. Symbol.toStringTag
*/

class User{
    constructor(){
        this.isValid = false;
    }
    static [Symbol.hasInstance](user){
        if(user.isValid){
            return true;
        }
    }
}
let xUser = {
    isValid: true,
}

console.log(xUser instanceof User);

let user = {
    name: "",
    [Symbol.toStringTag]: "USER",
}
console.log(Object.prototype.toString.call(true));
console.log({}.toString.call(user));