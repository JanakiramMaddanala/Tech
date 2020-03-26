class InvalidModelError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor;
    }
}


console.log(new InvalidModelError("").name);