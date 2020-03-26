const readLine = require('readline');

const readLineInterface = readLine.createInterface( process.stdin, process.stdout);

readLineInterface.question("What is NodeJs?", (answer) => {
    console.log(`\n\n\t${answer}\n\n`);
})