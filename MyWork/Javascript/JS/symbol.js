let id = Symbol("id");

console.log(id);

// let user = {
//     [id]: 1,
//     getLocation() {
//         console.log("HYD");
//     }
// };

// console.log(user)
// user.getLocation();

let user = {
    name: "John",
    hi: function () { console.log(this.name) },
    bye: function () { console.log(this.name + "bye") }

};

//   (user.go)() // John
let hi = user.hi;

console.log(hi());
//   (user.name == "John1") ? (user.hi)() : (user.bye)(); 


function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
console.log(john);
// console.log(john.name); // John


