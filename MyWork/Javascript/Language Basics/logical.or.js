var found = true;
var result = found || hello;
console.log(result);

var obj1 = null;
var obj2 = {
    id: 1,
    name: 'Ram',
}
result = obj1 || obj2;
console.log(result);

obj1 = true;
obj2 = {
    id: 1,
    name: 'Ram',
}
result = obj2 || obj1;
console.log(result);


obj1 = undefined;
obj2 = null;
result = obj2 || obj1;
console.log(result);

