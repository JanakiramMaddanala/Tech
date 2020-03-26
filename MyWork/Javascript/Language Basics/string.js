
var s = "Ram";
var s1 = s.trim();
console.log(s instanceof String);

 
console.log(typeof s);

/**
 * string is a primitive value created on the stack and the variable "name" holds the value "Ram"
 * primitive types are not objects then how come we are able to create a property called "color" and assign it to "red". 
 * why the value of name.color has suddenly become undefined
 * 
 * Answer: 
 * The answer to the all the above questions is Primitive Wrapper Types. 
 * Whenever you read a primitive type the following things occur:
 * 1. Create a new instance of String() 
 * 2. Assign color property to value 'red'
 * 3. Destroy the instance before moving on to next line
 * Because of this reason when we access name.color at the last line it actually creates new instance of String with color property and 
 * it is not initialized. Hence, it has undefined value.
 */
var name = "Ram"; 
name.color = 'red'; 
console.log(name.color); // undefined

var text = 'cat, bat, sat, fat';
var pattern = /.at/;
var matches = text.match(pattern);
console.log(matches);
var firstOccuranceOfPattern = text.search(pattern);
console.log(firstOccuranceOfPattern);
console.log(RegExp.input);
console.log(RegExp.leftContext);
console.log(RegExp.rightContext);
console.log(RegExp.lastParen);

var colorText = 'red,blue,green,yellow';
var colors1 = colorText.split(','); //[“red”, “blue”, “green”, “yellow”]
var colors2 = colorText.split(',', 2); //[“red”, “blue”]
var colors3 = colorText.split(/[^r]+/); //[“”, “,”, “,”, “,”, “”]

console.log(colors1, colors2, colors3);


var matches = colorText.match(/[^\,]+/);
console.log(matches);

var replacedText = colorText.replace(/(.r.)+/, function(match, pos, originalText) {
    console.log(match, pos);
    return 'cool'
});

console.log(replacedText);


