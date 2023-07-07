var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

// GET '/' listing.
router.get("/", flightsCtrl.index);

// get new listiung with GET, /flights/new
router.get("/new", flightsCtrl.new);

router.get("/:id", flightsCtrl.show);

// POST /flights

router.post("/", flightsCtrl.create);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
