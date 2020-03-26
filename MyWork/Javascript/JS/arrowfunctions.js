let user = {
    name: "",
    marks: [1,2,3],
    showMarks: function(){
        this.marks.forEach(mark => {
            console.log(`${this.name} - ${mark}`);
        });
    },
}

user.showMarks();

// 1. No this
// 2. No arguments
// 3. Take the this of outer lexical environment on which it is being called
// 4. Execute a piece of code with no worry about the this context and arguments
// 5. It can'b used like a constructor as there is no this.