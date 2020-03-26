
class Item1 {
    constructor() {
        this.name = "item1";
    }

    show() {
        return this.name;
    }
}

class Developer extends Item1 {
    constructor() {
        super();
        this._name = "Ram";
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        if (value) {
            this._name = value;
        }
    }
}

function showMessage(name = "Ram", age) {
    console.log(name, age);
}

function Item() {
    this.name = "item1";
}

function User(name, age) {
    User.city = "RJY";
}
var user = new User();

// User.prototype = new Item();
User.prototype.show = function () {
    return;
}

Developer.prototype.City = function (city) {

}

console.log(new Developer());
// console.log(new Item());
// console.log(User);
// console.log(typeof User);
// console.log(User.prototype);
// console.log(User.prototype.constructor.prototype);