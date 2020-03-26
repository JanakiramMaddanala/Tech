function getCounter() {
    var counter = function (start, end) { console.log(start); };
    counter.interval = 123;
    counter.reset = function () { console.log(0); };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);
