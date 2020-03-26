/**
 * Logic Used for sorting
 * firstValue < secondValue return -1;
 * firstValue > secondValue return 1;
 * firstValue === secondValue return 0;
 * 
 * Simplified Version : firstValue - secondValue;
 */
var numbers = [1, 2, 10, 5, "Hello", 0, null, "", "", false, undefined, null, true]

numbers.sort(compare);

console.log(numbers.join('|'));

function compare(firstValue, secondValue) {
    let value = firstValue - secondValue;
    console.log(firstValue, secondValue, value);
    return value;
}