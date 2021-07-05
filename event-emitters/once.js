const { EventEmitter } = require('events');
const onceEmitter = new EventEmitter();
const listenerOne = (txt) => console.log(txt);

onceEmitter.once('txt',listenerOne)

setInterval(()=>{
  onceEmitter.emit('txt','Hola');
  console.log('----')
},2000)