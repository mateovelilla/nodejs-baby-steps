const Emitter = require('./Emitter');
const Email = require('./email')
const Logger = require('./logger')
const Db = require('./db')
const emitter = new Emitter()
new Email(emitter)
new Logger(emitter)
new Db(emitter)
setInterval(()=>{
  emitter.logger("I'm going to insert a person");
  emitter.insertPerson({name: "Peter Griffin",email: "peterGriffin@familyguy.com"});
},4000)

module.exports = emitter;