const { EventEmitter } = require('events');
class Emitter extends EventEmitter {
  logger(message){
    this.emit('logger', message.toUpperCase())
  }

  insertPerson(info) {
    this.emit('insertPerson', info)
    this.sendEmail(info.email)
  }

  sendEmail(email) {
    this.emit('send-email', email)
  }
}
module.exports = Emitter