let john = { name: "John" };
let john1 = { name: "John" };

let map = new Map();
map.set(john, "Mr");
map.set(john1, "")

// john = null; 

console.log(map);

let obj = {}

obj[john] = "";
obj[john1] = "Mr";
obj[{id:1}] = "Cool";

obj[1] = "One";

console.log(obj);