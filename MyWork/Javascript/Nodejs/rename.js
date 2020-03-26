const fs = require("fs");

// Renaming
fs.renameSync("./assets/notes.txt", "./assets/notes.md");
console.log(`Renaming notes.txt to notes.md`);

// Move
fs.renameSync("./assets/notes.md", "../assets/newNotes.md");
console.log(`Moving notes.md to ../assests/newNotes.md`);

setTimeout(function() {
    fs.renameSync("../assets/newNotes.md", "./assets/notes.md");
    console.log(`Moving newNotes.md to ./assets/notes.md`);
    
    fs.renameSync("./assets/notes.md", "./assets/notes.txt");
    console.log(`Renaming notes.md to ./assets/notes.txt`);
}, 5000);

