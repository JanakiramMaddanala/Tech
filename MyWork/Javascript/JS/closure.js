let outerCount = 1;

function counter(initial){
    let innerCount = 100;

    function innerCounter(){
        console.log(`${outerCount++} - ${innerCount++} - ${initial++}`)
    }

    return innerCounter;
}

let firstCounter = counter(200);
firstCounter();
firstCounter();
firstCounter();

let secondCounter = counter(200);
secondCounter();
secondCounter();
secondCounter();