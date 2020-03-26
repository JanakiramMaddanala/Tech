var uri = 'http://www.wrox.com/illegal value.htm#start@!/k*()^%$#@! k~`\||{][}:"\'?><,.---_ hello ram';

console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));
console.log(decodeURI(encodeURIComponent(uri)));
console.log(decodeURIComponent(encodeURI(uri)));
 