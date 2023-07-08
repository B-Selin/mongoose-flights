const Flight = require("../models/flight");
const express = require("express");

module.exports = {
  addDestination,
};

// Create a POST /flights/: id/destinations route in controllers/flights.js to handle adding the destination:

async function addDestination(req, res) {
  const flight = await Flight.findById(req.params.id);
  // Get the flight from the request parameters
  try {
    await flight.save();
    console.log(flight);
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render("flights/show", { errorMsg: err.message });
  }
}
