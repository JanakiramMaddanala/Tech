var number = "1";
console.log(isNaN(number), Number(number));

var number = "Ram";
console.log(isNaN(number), Number(number));

var number = undefined;
console.log(isNaN(number), Number(number));

var number = null;
console.log(isNaN(number), Number(number));

var number = { id: 1 };
console.log(isNaN(number), Number(number));

var number = new Object(1);
console.log(number.valueOf(), number.toString(), number);
console.log(isNaN(number), Number(number));

var number = NaN;
console.log(isNaN(number), Number(number));



