// let arr =
//     [
//         "", 
//         0, 
//         0.1,
//         {
//             name: "",
//             getSalary() { return 100; }
//         },
//         function () { return "cool"; },
//         function showArray() { return [1, 2, 3, 4]; },
//     ];

// for(key of arr){
//     console.log(key);
// }

// arr.length = 2;

// for(key of arr){
//     console.log(key);
// }

// arr.length = 6;

// for(key of arr){
//     console.log(key);
// }

// // Clear an array by setting length to 0
// console.log("Initialize new array");

// arr = [];

// console.log(arr[0]);

let multiDimensionArray = [
    [1,2,3,4],
    [5,6,7,8],
    [8,9,10,11],
]

// console.log(multiDimensionArray[0].toString());

// console.log([1,2]);

console.log(multiDimensionArray.shift());
console.log(multiDimensionArray);
multiDimensionArray.unshift([1,2,3,4]);
console.log(multiDimensionArray);

