const fs = require("fs");


if (fs.existsSync("../assets")) {
    console.log("File exits already.");
} else {
    fs.mkdir("../assets", (error) => {
        if(error) {
            throw error;
        }
    
        console.log(`Directory Created....`);
    })
}
