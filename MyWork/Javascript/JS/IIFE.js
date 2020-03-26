// var name = "Janakiram";

(function Test(){
    var name = "";

    (function(){
        // var name = "M";
        console.log(name);
        (function(){
            // var name = "J";
            console.log(name);
        })();
    })();

})();

var i = 10;

// function Test(){
//     var i = 0;
//     console.log(i);
// }

{
    var i = 100;
    let k = 0;
}

console.log(i);

console.log(i);

Test();

// console.log(name);