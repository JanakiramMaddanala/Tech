// Property of an object can be data property or accessor property
let user = {
    name: "ABC",
    age: 25,
    get nameAge(){
        return this.name + ' ' + this.age;
    }
};

console.log(user.nameAge);