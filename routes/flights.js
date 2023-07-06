var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flight');

// get new listiung with GET, /flights/new
router.get('/new', flightCtrl.new);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
