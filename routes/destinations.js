const express = require("express");
const router = express.Router();
const destinationsCtrl = require("../controllers/destinations");

// POST /flights/:id/destinations (create review for a movie)
router.post("/flights/:id/destinations", destinationsCtrl.addDestination);

module.exports = router;
