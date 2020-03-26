importScripts('subworker.js');
// self.onmessage = function(e) {
//     // throw Error("Erroring out worker");
//     console.log(self);

//     setTimeout(() => {
//         var inputMessage = e.data;
//         self.postMessage(`Hello ${inputMessage}`);
//     }, 10000);

//     console.log('waiting for process to finish!');
// }