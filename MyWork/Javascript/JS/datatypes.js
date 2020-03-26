// let message = `\u00A9`

// console.log(message);
// console.log(message.length);

// let smiley = "\u{1F60D}";

// console.log(smiley);
// console.log(smiley.length);

// message = "Ram";

// console.log("IndexOf 'm'" + message.indexOf('m'));
// console.log(message.toLocaleLowerCase());

// console.log(message[100]);
// console.log(message.charAt(100) == '');

// console.log("for..in..with..string");
// for(let char in message){
//     console.log(char);
// }

// console.log("for..of..with..string");
// for(let char of message){
//     console.log(char);
// }

// let found = ~message.indexOf("a");
// console.log(Boolean(found));


let testMessage = `Javascript`;

// console.log(testMessage.includes("scr"));

// console.log(testMessage.startsWith('Ja'));

// console.log(testMessage.slice(0, 5));

// console.log(testMessage.substring(4, 2));

// console.log(testMessage.substr(0, 5));

console.log(testMessage.slice(-4, -1));

// console.log(testMessage.substring(-5, 5));

// console.log(testMessage.substr(-8, 2));

// console.log(testMessage.codePointAt(1));

// console.log(testMessage.codePointAt(0));

// testMessage = String.fromCodePoint(97)

// console.log(testMessage);

// testMessage = String.fromCharCode(97);

// console.log(testMessage);

// console.log('Österreich'.localeCompare('Zealand'));

// console.log('S\u0307\u0323');

// console.log("0\r1\f2\f3\f4\f5");

// console.log("      ram      ".trim());

// console.log(parseInt("123em"));


let str = "test";
let arr = ["t", "e", "s", "t"];

console.log(str.slice(1, 3)); // es
console.log(arr.slice(1, 3)); // e,s

console.log(str.slice(-2)); // st
console.log(arr.slice(-2)); // s,t

console.log(arr);

let removed = arr.splice(0, 1, "a", "b", "c");

console.log(removed);

console.log(arr);

arr.length = 0;

console.log(arr);

arr.length = 2;

console.log(arr);

arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    2: 10,
    3: 9,
    length: 4,
};

let arr1 = Array.from(arrayLike)

console.log(`arr1: ${arr1}`);

console.log(arr.concat(arrayLike));

console.log(arr);

arr.forEach(console.log);

arr.forEach(function (value, index, array) {
    console.log(`${value} - ${index}`);
});

console.log(arr.includes(1));

console.log(arr.indexOf(1));

console.log(arr.lastIndexOf(1));

console.log(NaN == NaN);

// find and findIndex
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.findIndex(user => user.name.startsWith("M"));

console.log(user);

users = users.map(user => `${user.id}.${user.name}`);

console.log(users);

let numbers = [1, -2, 15, 2, 0, 8];

numbers.sort((a, b) => a - b);

console.log(numbers);

console.log(numbers.reverse());

console.log(testMessage.split(''));

let result = numbers.reduce((prev, current) => prev + current);

console.log(result);

// numbers = [];

result = numbers.reduce((prev, current) => prev + current);

console.log(result);

user = {
    age: 18,
    younger(otherUser) {
        console.log(otherUser.age);
        return otherUser.age < this.age;
    }
};

users = [
    { age: 12 },
    { age: 16 },
    { age: 32 }
];

// find all users younger than user
let youngerUsers = users.filter(user.younger, user)

console.log(youngerUsers.length); // 2


let someEven = numbers.every(s => s % 2 == 0);

console.log(someEven);

numbers.fill(10, 2, 5);

console.log(numbers);

numbers.copyWithin(-1,2,4);

console.log(numbers);
