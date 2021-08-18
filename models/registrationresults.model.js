const mongoose = require("mongoose");
// Mongoose takes object and posts to MongoDB

const CustomerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
