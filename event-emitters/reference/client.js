const hotel = require('./hotel');

setInterval(()=>{
  hotel.emit('check-in', 'Hi, my name is Matt');
}, 2000);