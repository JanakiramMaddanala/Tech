const fs = require("fs");

const files = fs.readdirSync("./");

console.log(files);

fs.readdir('./', (error, files) => {
    console.log(files);
});

console.log('Completed');



