class DB {
  constructor(emitter){
    emitter.on('insertPerson',(person)=> {
      console.log(`inserting person:${JSON.stringify(person)}`);
    })
  }
}
module.exports = DB
