const fs = require("fs");

const textContent = `
    Hello World!
    Writing Content to file using Node fs Module.
`;

fs.writeFile('./assets/notes.txt', textContent, (error) => {
    if(error) {
        throw error;
    }

    console.log(`File Saved....`);
    
})