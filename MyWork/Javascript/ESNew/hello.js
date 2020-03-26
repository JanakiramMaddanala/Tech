function hello() {
    console.log('hello');
}

(function() {
    function hello() {
        console.log('Hello');
    }

    hello();
})();


hello();

var obj = { name: '', city: ''};

console.log({...obj})