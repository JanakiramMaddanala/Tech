function SuperType() {
    this.colors = ['red','green'];
}

function SubType() {
    SuperType.call(this);
}

var subType = new SubType();
console.log(subType.colors);