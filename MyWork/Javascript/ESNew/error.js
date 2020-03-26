// try {
//     setTimeout(() => {
//         console.log('Timed Out!!!');
//         hello;
//     }, 1000)
// } catch(e) {
//     console.log('I got it')
// }

let output = (async function() {
    try {
        await Promise.reject('Not sure why?');
    } catch (error) {
        console.log(error);
        return 1;
    } finally {
        console.log('finally');
    }
})();

console.log('Hi');
console.log(output.then((result) => console.log(result)));