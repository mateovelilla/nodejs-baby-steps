class Email {
  constructor(emitter) {
    emitter.on('send-email',(email)=> {
      console.log(`Sending email to ${email}`)
    })
  }
}
module.exports = Email


