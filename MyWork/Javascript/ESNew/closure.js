function add() {
    let sum;
    console.log(this);
    return (a,b) => {
        console.log(this);
        this.sum = a+b;
        console.log(this)
        return this.sum;
    }
}

console.log(add()(1,2));