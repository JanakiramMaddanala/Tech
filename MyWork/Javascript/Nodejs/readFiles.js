const fs = require("fs");


fs.readFile('./readline.js', (error, data) => {
    console.log(`Async File Reading : \n\n${data.toString()}`);
})

let contentBuffer = fs.readFileSync('./listFiles.js')
console.log(`Sync File Reading : \n\n${contentBuffer.toString()}`);
