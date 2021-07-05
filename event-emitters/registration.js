const { EventEmitter } = require('events');
const callCenter = new EventEmitter();

callCenter.on('QA',(name) =>{
  console.log(`Hi ${name} Welcome to the QA department - 2!`);
})

callCenter.on('QA',(name) =>{
  console.log(`Hi ${name} Welcome to the QA department!`);
})


setInterval(()=>{
  callCenter.emit('QA', 'Ana')
}, 2000);