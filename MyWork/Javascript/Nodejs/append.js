const fs = require("fs");
const skills = require("../assets/skill.json");

skills.names.forEach((value, index) => {
    fs.appendFile("./assets/notes.txt", `\n\t${index + 1}. ${value}`, (error) => {
        if(error) {
            throw error;
        }

        console.log(`Skills added to the notes.txt`);
    })
});
