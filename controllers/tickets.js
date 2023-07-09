const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
  addToTickets,
};

async function addToTickets(req, res) {
  const flight = await Flight.findById(req.params.id);
  if (!flight) {
    res.render("tickets/new", { errorMsg: "Invalid flight ID" });
    return;
  }

  // ticket was not actually being created, I had to create a new const as "ticket" and change the flight.ticket to flight tickets
  const ticket = await Ticket.create(req.body);
  flight.tickets.push(ticket);
  await flight.save();
  res.redirect(`/flights/${flight._id}`);
}

async function newTicket(req, res) {
  //Sort tickets by their destination?
  const tickets = await Ticket.find({}).sort({ destination: 1 });

  res.render("tickets/new", { tickets });
}

async function create(req, res) {
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/tickets/new");
}
