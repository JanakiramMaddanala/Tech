var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.indexOf(4, 4));
console.log(numbers.indexOf(4, 3));
console.log(numbers.lastIndexOf(4, 3));
console.log(numbers.lastIndexOf(4, 4));
console.log(numbers.lastIndexOf(4, 6));
console.log(numbers.lastIndexOf(4, 5));

/**
 * Index methods return the position of element found. If no element found, returns -1.
 * indexOf(4) = 1 
 *      Start looking for 4 from Zero index and move forward till you find it.
 * lastIndexOf(4) = 3 
 *      Start looking for 4 from Last index and move backward till you find it.
 * indexOf(4, 2) = 3 
 *      Start looking for 4 from 3rd element (or 2nd index) and move forward.
 * lastIndexOf(4, 2) = 1 
 *      Start looking for 4 from 3rd element (or 2nd index) and move backward.
 */
var numbers = [1, 4, 5, 4, 10, 15]

console.log(numbers.indexOf(4)); // 1
console.log(numbers.lastIndexOf(4)); // 3
console.log(numbers.indexOf(4, 2)); // 3
console.log(numbers.lastIndexOf(4, 2)); // 1
console.log(numbers.indexOf(0)); // -1
console.log(numbers.lastIndexOf(0)); // -1




