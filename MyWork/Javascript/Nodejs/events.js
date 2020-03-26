const events = require('events');
const numbers = [];

let collectionEvent = new events.EventEmitter();

collectionEvent.on('done', () => {
    console.log(`Numbers added are ${numbers.join(", ")}`);
});

collectionEvent.on('add', (element) => {
    numbers.push(element);
});

for (let index = 0; index < 10; index++) {
    collectionEvent.emit('add', index);
}

collectionEvent.emit('done');



