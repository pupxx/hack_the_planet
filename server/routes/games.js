var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/gamesController.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ctrl.getAllGames)


module.exports = router;
