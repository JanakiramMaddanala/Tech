var obj = {
  num: 2
};

var add = function(num2, num3, num4) {
  return this.num + num2 + num3 + num4;
};

var arr = [3, 4, 5];

//Call method
console.log(add.call(obj, 3, 4, 5)); //Output : 14
//Apply method
console.log(add.apply(obj, arr)); //Output : 14
//bind Method
var bound = add.bind(obj);

// delete obj.num;

obj = {
  num: 4
};
console.log(bound(3, 4, 5)); //output : 14
