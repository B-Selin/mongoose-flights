const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  addDestination,
};

function newFlight(req, res) {
  res.render("flights/new", {
    errorMsg: "Error, flight not created!",
  });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect("/flights");
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
// Create a POST /flights/: id/destinations route in controllers/flights.js to handle adding the destination:

async function addDestination(req, res) {
  try {
    // Get the flight from the request parameters
    const flight = await Flight.findById(req.params.id);

    // Add the destination to the flight's destinations array
    flight.destinations.push(req.body);

    // Save the flight
    await flight.save();

    // Redirect back to the flight's show page
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}

async function index(req, res) {
  const allFlights = await Flight.find({});
  res.render("flights/index", {
    title: "All Flights",
    allFlights,
  });
}

// Create a GET /flights/:id route in controllers/flights.js to handle the detail view:
async function show(req, res) {
  const { id } = req.params;
  try {
    const flight = await Flight.findById(id);
    res.render("flights/show", { flight });
  } catch (err) {
    res.redirect("/flights");
  }
}
