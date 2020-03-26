/**
 * Slice would exclude end position.
 */
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);

var colors4 = colors.slice(-2,-1); // Equivalent to colors.slice(length - 2, length - 1); 
var colors5 = colors.slice(-2,-3); // Equivalent to colors.slice(length - 2, length - 3);

console.log(colors, colors2, colors3);
console.log(colors4, colors5);

