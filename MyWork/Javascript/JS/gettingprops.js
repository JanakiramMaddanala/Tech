let user = {};

Object.defineProperties(user, {
    name: {
        value: "",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    [Symbol("id")]: {
        value: "___skjdfo____",
        writable: true,
        enumerable: true,
        configurable: true,
    },
});

Object.prototype.city = "";
Object.prototype.phone = 2348923048;

let symbols = Object.getOwnPropertySymbols(user);
let ownKeys = Reflect.ownKeys(user);
let keys = Object.keys(user);

for (const key in user) {
    console.log(key);
}

console.log(Object.getPrototypeOf(user));