function square(num, exp) {
    console.log(this);
    console.log(arguments);
    console.log(num);
    console.log(exp);
    return Math.pow(num, exp);
}


let obj = {
    num: 2,
};

let squareInput = {
    0: 2,
    1: '334',
    length: 2,
    [Symbol.iterator]() {
        this.keys = Object.keys(this);
        this.index = 0;
        return this;
    },
    next() {
        this.currentKey = this.keys[this.index++];
        this.currentValue = this[this.currentKey];
        // console.log(`${this.currentKey} - ${parseInt(this.currentKey)} 
        //             : ${this.currentValue} - ${parseInt(this.currentValue)} `);
        if (this.currentValue && parseInt(this.currentKey) + 1) {
            return { done: false, value: parseInt(this.currentValue) };
        }

        return { done: true };
    }

};

let array = [1, 2, 3, 4];

// for (const value of squareInput) {
//     console.log(value);
// }

let squareInputObject = {
    num: 2,
    exp: 3,
    [Symbol.iterator]() {
        this.values = Object.values(this);
        this.index = 0;
        console.log(this.values);
        return this;
    },
    next() {
        this.currentValue = this.values[this.index++];

        if (this.currentValue) {
            return { done: false, value: this.currentValue };
        }

        return { done: true }
    },
}

// for (let value in squareInputObject) {
//     console.log(value);
// }

// console.log(square.call(obj, [2, 3]));

// call accepts iterables as args
// console.log(`----------func.call----------`);
// console.log(square.call(obj, ...squareInput));

// apply accepts array-like objects as args
// console.log(`----------func.apply----------`);
// console.log(square.apply(obj, squareInput ))



