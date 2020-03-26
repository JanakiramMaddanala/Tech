// "use strict"
// console.log("hellocls");

// // Displays array in foreach
// [1,2,3,4].forEach(element => {
//     console.log(element);
// });

// /*Multiline commnet     
// */


// var value = function(value)
// {
//     let num1 = 11;

//     if(value)
//     {
//         var num = 9;
//     }
//     else
//     {
//         num1 = 10;
//     }
        
//     console.log(num);
//     console.log(num1);
// }

// var value2 = function()
// {
//     console.log(num);
// }

// value(false)
// // value2();

// let message = `${1+2}`

// console.log(message)

// let nullMessage = null;

// console.log(nullMessage);

// let undefinedValue;

// console.log(undefined);

// console.log(Number(undefined))

// console.log(Number(null))

// console.log(Number(NaN))

// console.log(Number("NaN"))

// console.log(Number("Ram"))

// console.log(Number(true))

// console.log(Number(" 1234    "))


// console.log(+true);

// console.log(+"ram")

// let a = "1ajdfj";
// let b = 0;

// console.log(+a);
// switch (+a) {
//   case b + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run");
// }

function showMessage(from, text = "Cool") {

    from = '*' + from + '*'; // make "from" look nicer
  
    console.log( from + ': ' + text );

    console.warn("Warning")

    return from
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello

  console.log(showMessage(from))
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from ); // Ann




