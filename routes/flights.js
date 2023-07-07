var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

// get new listiung with GET, /flights/new
router.get("/new", flightsCtrl.new);

// POST /flights

router.post("/", flightsCtrl.create);

// GET '/' listing.
router.get("/", flightsCtrl.index);

router.get("/:id", flightsCtrl.show);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
