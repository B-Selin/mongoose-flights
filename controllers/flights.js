const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { title: "All Flights", flights });
}

// Create a GET /flights/:id route in controllers/flights.js to handle the detail view:
async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({ flight: flight._id });
  res.render("flights/show", {
    title: `Flight ${flight.number} Details`,
    flight,
    tickets,
  });
}

// const tickets = await Ticket.find({ _id: { $nin: flight.ticket } });
function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add New Flight",
    errorMsg: "Error, flight not created!",
  });
}

async function create(req, res) {
  try {
    const flight = await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    // Typically some sort of validation error

    res.render("flights/new", { errorMsg: err.message });
  }
}
