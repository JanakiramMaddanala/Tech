// let range = {
//     from: 1,
//     to: 10,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         }
//         return { done: true };
//     }
// }


// for(let value of range){
//     console.log(value);
// }

let user = {
    name: "",
    age: 24,
    designation: "",
    skill: "Javascript",

    [Symbol.iterator]() {
        this.index = 0;
        this.properties = [];
        let ignoreProperties = ['index', 'properties', 'next'];

        for (let key in this) {
            if(ignoreProperties.includes(key)) {
               continue;
            }
            this.properties.push(key);
        }

        console.log(this.properties);

        return this;
    },

    next() {
        this.currentProperty = this.properties[this.index++];
        if (this.currentProperty) {
            return { done: false, value: `${this.currentProperty} - ${this[this.currentProperty]}` };
        }
        
        return { done: true };
    },
}


for(let item of user){
    console.log(item);
}