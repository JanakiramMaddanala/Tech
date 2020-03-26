let code = 'console.log(`Hello: ${a}`)';

let fun = new Function('a', code);
fun(1);