const fs = require("fs");

fs.unlink('./assets/notes copy.txt', (error) => {
    if(error) {
        throw error;
    }

    console.log(`File Removed`);
    
})
