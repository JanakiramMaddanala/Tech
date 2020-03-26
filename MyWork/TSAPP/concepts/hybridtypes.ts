interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number, end: number) { console.log(start)};
    counter.interval = 123;
    counter.reset = function () { console.log(0)};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log(c);