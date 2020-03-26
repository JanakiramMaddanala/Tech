// let user = {
//     name: "John",
//     age: 25,
// };

// let [name, age] = Object.values(user);

// console.log(name);

// for (const [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// let set = new Set();

// set.add(1);
// set.add(1);
// set.add(10);
// set.add(-1);
// set.add(-3);

// let [min, max = 10, ...remaining] = set;

// console.log(min);

// console.log(max);

// console.log(remaining);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { width: w, height: h, title: t } = options;

console.log(w);
console.log(h);
console.log(t);

// console.log(width);
// console.log(height);
// console.log(title);

let [first, second] = [1, 2];
console.log(first);
console.log(second);



