const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
  addToTickets,
};

async function addToTickets(req, res) {
  const flight = await Flight.findById(req.params.id);
  // The tickets array holds the tickets's ObjectId (referencing)
  flight.allTickets.push(req.body.ticketId);
  await flight.save();
  res.redirect(`/flights/${flight._id}`);
}

async function newTicket(req, res) {
  //Sort tickets by their destination?
  const tickets = await Ticket.find({});

  res.render("tickets/new", { title: "Add ticket", tickets });
}

async function create(req, res) {
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/tickets/new");
}
