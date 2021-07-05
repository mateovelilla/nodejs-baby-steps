class Logger {
  constructor(emitter) {
    emitter.on('logger',(msg)=> {
      console.log(`${msg} from Logger module`)
    })
  }
}
module.exports = Logger