function User(name){
    this.name = name;

    this.hello = function(){
        return `Hello ${name}`;
    };
}

// let user = new User("Ram");
// user.hello();
// console.log(user.name);

function User(name){
    return {
        name: name,
        hello: function(){
            return `Hello, ${this.name}`;
        }
    }
}

let user = User("");

console.log(user.name);
console.log(user.hello());

