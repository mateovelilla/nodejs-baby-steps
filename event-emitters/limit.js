const { EventEmitter } = require('events');

const ee = new EventEmitter();
// ee.setMaxListeners(20);

for (let i = 0; i < 14; i++) {
  ee.on('message',(msg) =>{
    console.log(`"${msg}" in the listener #${i}`);
  });
}

ee.emit('message', 'Message')