const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: [
        "LAX",
        "JFK",
        "SEA",
        "LAS",
        "DEN",
        "ATL",
        "IST",
        "CDG",
        "NAP",
        "FLR",
        "LHR",
        "AUS",
        "SAN",
      ],
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: [
        "American Airlines",
        "Southwest",
        "Delta",
        "Turkish Airlines",
        "Air France",
      ],
      required: [true, "Please provide an airline"],
      default: "Turkish Airlines",
    },
    airport: {
      type: String,
      enum: [
        "LAX",
        "JFK",
        "SEA",
        "LAS",
        "DEN",
        "ATL",
        "IST",
        "CDG",
        "NAP",
        "FLR",
        "LHR",
        "AUS",
        "SAN",
      ],
      required: true,
      required: [true, "Please provide an airport"],
      default: "IST",
    },
    destinations: [destinationSchema],

    // <!-- flightNo field will have a range of numbers between 10 and 9999 and required -->
    flightNo: {
      type: Number,
      min: [10],
      max: [9999],
      required: [true, "Flight number is required"],
    },
    //  <!-- Departure date need to be set to a default value of 1 year from now-->
    departs: {
      type: Date,
      default: Date.now() + 365 * 24 * 60 * 60 * 1000,
    },
    ticket: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Mongoose vocabulary: A property may also be referred to as a “path”.

// Compile the schema into a model and export it
module.exports = mongoose.model("Flight", flightSchema);
