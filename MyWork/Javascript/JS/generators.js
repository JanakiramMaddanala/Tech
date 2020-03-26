function* generate() {
    let result = yield "2 + 2?"; 

    result = yield "4 + 4?";
    console.log(result);

}

let generator = generate();

let question = generator.next().value;
console.log(question);
try {
    console.log(generator.next(4));
    console.log(generator.next(10));
    generator.throw(new Error("The answer is not found in my database"));
} catch (e) {
    console.log(e); // shows the error
}

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }

// function* generateAlphaNum() {

//     // yield* generateSequence(48, 57);
//     for (let i = 48; i <= 57; i++) yield i;

//     // yield* generateSequence(65, 90);
//     for (let i = 65; i <= 90; i++) yield i;

//     // yield* generateSequence(97, 122);
//     for (let i = 97; i <= 122; i++) yield i;

// }

// let str = '';

// for (let code of generateAlphaNum()) {
//     str += String.fromCharCode(code);
// }

// console.log(str); // 0..9A..Za..z

// function* range(from, to) {
//     for (let element = from; element <= to; element++) {
//         yield element;
//     }
// }

// function* subRange(from, to) {
//     for (let index = from; index < to; index++) {
//         yield* range(from, to);
//         console.log(`-------------`);
//     }
// }

// for (const iterator of subRange(1, 10)) {
//     console.log(iterator);
// }

// let range = {
//     from: 1,
//     to: 10,

//     *[Symbol.iterator](){
//         for (let element = this.from; element < this.to; element++) {
//             yield element;   
//         }
//     }
// }

// for (const iterator of range) {
//     console.log(iterator);
// }