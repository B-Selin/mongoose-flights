const mongoose = require('mongoose' );
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
}, {
  timestamps: true 
});

// Mongoose vocabulary: A property may also be referred to as a “path”.


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)