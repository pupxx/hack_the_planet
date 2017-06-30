const games = require('../models/gamesModels.js')

function getAllGames (req, res){
  games.getAllGames().then((all)=>{
    res.send(all)
  })
}


module.exports = {
  getAllGames

}
