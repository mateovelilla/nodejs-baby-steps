const { EventEmitter } = require('events');
const ee = new EventEmitter();
const listenerOne = (txt) => console.log(txt);
const listenerTwo = (txt) => console.log(txt.toUpperCase());

ee.on('txt',listenerOne)
ee.on('txt',listenerTwo)

setInterval(()=>{
  ee.emit('txt','Hola');
  ee.removeListener('txt',listenerTwo);
  // alias to removeListener
  ee.off('txt',listenerTwo);
},2000)