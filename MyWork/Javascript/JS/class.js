class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}


let user = new User("");

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(user)));

for (const key in user) {
    console.log(key);
}
