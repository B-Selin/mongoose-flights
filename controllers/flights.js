const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
};

function newFlight (req, res) {
  res.render('flights/new', {
    errorMsg: 'Error, flight not created!' 
  });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function index(req, res){
  const allFlights = await Flight.find({})
  res.render('flights/index', { 
    flights: allFlights,  
  })
}