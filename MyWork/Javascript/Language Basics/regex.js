var text = 'cat, bat, sat, fat';
var pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches); //cat
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0


var text = 'mom and dad and baby';
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches); //0
console.log(matches.index); //0
console.log(matches.input); //”mom and dad and baby”
console.log(matches[0]); //”mom and dad and baby”
console.log(matches[1]); //” and dad and baby”
console.log(matches[2]); //” and baby”

var regEx = new RegExp("abc", "gim");
console.log(regEx);
console.log(regEx.toString());
console.log(regEx.toLocaleString());
console.log(regEx.valueOf());
console.log(regEx.lastIndex);
console.log(regEx.ignoreCase);
console.log(regEx.multiline);
console.log(regEx.global);
console.log(regEx.source);


