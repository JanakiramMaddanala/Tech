let numbers = new Set();

numbers.add(1);
numbers.add(1);
let isOnePresent = Array.from(numbers).some(value => value == 1)

console.log(numbers.values());

console.log(isOnePresent);