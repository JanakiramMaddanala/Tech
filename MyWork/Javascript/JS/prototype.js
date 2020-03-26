let animal = {
    
    setType: function(animalType){
        this.type = animalType;
    }
}


let tiger = {
    name : "Tiger",
    __proto__: animal,
}

tiger.setType("Wild");

tiger.setType = function(){
    this.animalType = arguments[0];
}

for (const key in tiger) {
    if (tiger.hasOwnProperty(key)) {
        const element = tiger[key];
        console.log(key);
    }
}

console.log(`-----------`)
// let dictionary = Object.create(null);

// // your code to add dictionary.toString method
// Object.defineProperty(dictionary, "toString", {
//     value: function(){
//         return Object.keys(dictionary).join();
//     },
//     writable: true,
//     configurable: true,
//     enumerable: false
// });

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // your toString in action
// console.log(dictionary); // "apple,__proto__"

console.log(`---------------`);
// let dictionary = Object.create(null, {
//     toString: { // define toString property
//       value() { // the value is a function
//         return Object.keys(this).join();
//       }
//     }
//   });
//   console.log(Object.prototype);
//   dictionary.apple = "Apple";
//   dictionary.__proto__ = "test";
//   console.log(Object.prototype);
  
//   // apple and __proto__ is in the loop
//   for(let key in dictionary) {
//     console.log(key); // "apple", then "__proto__"
//   }
  
//   // comma-separated list of properties by toString
//   console.log(dictionary); // "apple,__proto__"

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.name = "New Rabbit";
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  }
  
  let rabbit = new Rabbit("Rabbit");
  
  rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi();  