const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat());

const flatMappedArray = array.flatMap(element => element * 1);
console.log(flatMappedArray);

const value = [[4]] * 1;
console.log(value);

const name = "    Javascript     ";

console.log(name.trimStart().trimEnd());

let obj = {
  id: 1,
  name: "",
};

console.log(Object.entries(obj));
let entries = [ [ 'id', 1 ], [ 'name', '' ] ];
obj = Object.fromEntries(entries);
console.log(obj);