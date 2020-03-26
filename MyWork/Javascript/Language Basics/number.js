console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(1/0);
console.log(1.7976931348623157e+309); 
console.log(5e-1000);

console.log("---- Object ----");
var obj = {
    a:1,
    b:2,
    toString() {
        return this.a;
    }
}
console.log(obj.valueOf());
console.log(obj.toString());
console.log(typeof obj);
console.log(String(obj));
console.log("---- Object ----\n");

console.log("---- Number Conversion ----");
console.log(Number(""));
console.log(Number("5"));
console.log(Number("1234skdjlk"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(5));
console.log(Number(obj));
console.log(Number(""));
console.log("---- Number Conversion ----\n");

console.log("---- Zero to Empty String Equality Check ----");
console.log(0 == '0');  
console.log(0 == '');   
console.log('' == 0);  
console.log(String(0));
console.log("---- Zero to Empty String Equality Check ----\n");

var number = 100;
console.log(number.toString(2));
console.log(number.toString(10));
console.log(number.toString(16));
console.log(number.toString(8));


