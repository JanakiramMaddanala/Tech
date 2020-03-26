// IIFE
var counterUtil = (function() {
    var initialValue = 0;

    function increment() {
        initialValue++;
        return initialValue;
    }

    function decrement() {
        initialValue--;
        return initialValue;
    }

    return {
        increment,
        decrement,
    }

})();

console.log(counterUtil.increment());
console.log(counterUtil.increment());
console.log(counterUtil.increment());
console.log(counterUtil.increment());
console.log(counterUtil.increment());

console.log(counterUtil.decrement());
console.log(counterUtil.decrement());
console.log(counterUtil.decrement());
console.log(counterUtil.decrement());
console.log(counterUtil.decrement());