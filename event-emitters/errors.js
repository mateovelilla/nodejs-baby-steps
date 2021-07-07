const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();
// const myEmitter = new EventEmitter({ captureRejections: true });

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));

// myEmitter.on('something', async (value) => {
//   throw new Error('kaboom');
// });

// myEmitter.emit('something');
