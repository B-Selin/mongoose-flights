const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  // create,
  // index
};

function newFlight (req, res) {
  res.render('flights/new', {
    errorMsg: 'Error, flight not created!' 
  });
}
