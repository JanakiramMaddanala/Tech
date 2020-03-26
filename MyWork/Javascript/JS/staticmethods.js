class User {
    constructor(){
        this.name = "";
    }

    city(){
        return "";
    }

    static salary(){
        return 100;
    }
}

console.log(User.salary())

console.log(User.prototype);

for (const key in new User()) {
    console.log(key);
}