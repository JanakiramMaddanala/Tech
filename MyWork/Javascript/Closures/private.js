
var obj = (function createDataSafeObject(input) {
    var a = input;

    function sum() {
        return a;
    }

    return {
        id: 1,
        calculate: function() {
            return sum;
        }
    }
})(10);

var sum = obj.calculate();
console.log(sum.toString());
console.log(sum());
