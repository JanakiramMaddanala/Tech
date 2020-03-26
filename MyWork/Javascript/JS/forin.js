// To iterate over enumerable properties of an object
/*
1. By default all the properties of an object are writable, enumerable and configurable.
2. To make any chages to these property descriptors, we need to call the below one.
    Object.defineProperty(obj, "propertyname", {value: "", writable: false}) 
    It just overrides the descriptors for existing properties
3. For new property added via Object.defineProperty() it assumes all the descriptors as
   false if not specified.
4. configurable will not allow us to delete or modify it using Object.defineProperty()
   so it is a one road way with no way to change it after defining.
   ex. Math.PI // readonly, non-enumerable and non-configurable
*/

let user = {
    name: "",
    age: 25,
    smile() {
        console.log(`smiling....`);
    }
};

let namePropertyDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(namePropertyDescriptor);

Object.defineProperty(user, "name", {
    value: ""
});

namePropertyDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(namePropertyDescriptor);

Object.defineProperty(user, "city", {
    value: ""
});

let cityPropertyDescriptor = Object.getOwnPropertyDescriptor(user,"city");
console.log(cityPropertyDescriptor);

for (const key in user) {
    if (user.hasOwnProperty(key) && typeof user[key] != 'function') {
        const element = user[key];
        console.log(`${key} : ${element}`);
    }
}
let clone = {};
Object.defineProperties(clone, Object.getOwnPropertyDescriptors(user));

console.log(clone);