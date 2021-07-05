const { EventEmitter } = require('events');
const bookstore = new EventEmitter();

bookstore.on('send-book', function(book){
    console.log(`${book.title} of ${book.author} received ${book.date}`)
})

setTimeout(()=>{
    bookstore.emit('send-book', {title: 'The Prince', author:'Nicolas Maquiavelo', date: new Date()});
},2000)