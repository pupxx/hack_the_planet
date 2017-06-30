const knex = require('../../db/connection.js')

class Games{
  constructor(){

  }

  static getAllGames (){
    return knex('games')
  }
}


module.exports = Games
