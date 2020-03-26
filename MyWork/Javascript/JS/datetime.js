let date = new Date(0);
console.log(date);

date = new Date(24*3600*1000); // milliseconds
console.log(date);

date = new Date("2019/03/9");
console.log(date);
console.log(`--------------`)

date = new Date();
console.log(date);
console.log(+date);
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(1552155981201/(24*3600*1000)/365);
console.log(Date.now());
