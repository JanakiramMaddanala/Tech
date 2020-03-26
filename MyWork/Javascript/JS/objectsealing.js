let user = {
    name: "",
    age: 25
};
console.log(user);

// can't add properties but can remove
// Object.preventExtensions(user); 
// delete user.name;
// console.log(user);

// Can't add or removed properties but can be modified
// Object.seal(user);
// user.city = "";
// delete user.name;
// user.name = "";
// Object.defineProperty(user, "name", {
//     value: ""
// })
// console.log(user);

// can't add/remove/change properties. Frozen object is sealed but not vice-versa.
Object.freeze(user);
user.name = "";
delete user.name;
user.city = "";
console.log(user);

console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));
