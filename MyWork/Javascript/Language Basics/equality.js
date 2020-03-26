console.log("----Equal----");
console.log(undefined === null);
console.log(NaN === NaN);
console.log(NaN === 1);
console.log("5" === 5);
console.log(true === 2);
console.log(false === 0);
console.log(true === 1);
console.log(null === false);
console.log(null === 0);
console.log(undefined === 0);
console.log("----Equal----");

console.log("----Identically Equal----");
console.log(undefined === null);
console.log(NaN === NaN);
console.log(NaN === 1);
console.log("5" === 5);
console.log(true === 2);
console.log(false === 0);
console.log(true === 1);
console.log(null === false);
console.log(null === 0);
console.log(undefined === 0);
console.log(1 == 1)
console.log("----Identically Equal----");

let obj = {
    id:1,
    name: 'Ram',
}

let obj1 = {
    id:1,
    name: 'Ram',
}

console.log(obj == obj1);
obj1 = obj;
console.log(obj == obj1);

var date = new Date(1992, 11, 16);
var date1 = new Date(1992, 11, 16);;

console.log(+date == +date1);
console.log(date === date1);


