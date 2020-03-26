function InvalidArgumentError(message) {
    this.message = message;
    this.name = "Invalid Argument Error";
}

InvalidArgumentError.prototype = new Error();

function add(a,b) {
    try {
        // throw 1;
        // throw 'Ram';
        // throw { id: 1, name: 'ram'};
        // throw true;
        console.log(Number.isInteger(a));
        console.log(Number.isInteger(b));
        
        if(Number.isInteger(a)) {
            throw new InvalidArgumentError('Invalid Argument: a')
        }

        if(Number.isInteger(b)) {
            throw new InvalidArgumentError('Invalid Argument: b')
        }

        return a + b;

    } catch (error) {
        console.log(error);
    }
}

add(1,"1");

add("2", 1);


eval("a ++ b");