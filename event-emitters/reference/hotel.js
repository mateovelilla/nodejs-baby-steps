const { EventEmitter } = require('events');
const hotel = new EventEmitter();

hotel.on('check-in',(greeting) =>{
  console.log(greeting);
  console.log('Hi, Welcome to the Cartagena resort.')
});

module.exports = hotel;