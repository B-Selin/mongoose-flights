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

}

async function index(req, res){
  const allFlights = await Flight.find({})
  res.render('flights/index', { 
    flights: allFlights,  
  })
}