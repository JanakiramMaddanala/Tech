var age = 26;
console.log(window.age);

window.color = 'Red';
console.log(window.color);

function sayAge() {
    return 26;
}
console.log(window.sayAge());

delete window.color;
delete window.age;

console.log(window.age);
console.log(window.color);