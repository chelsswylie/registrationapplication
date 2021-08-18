const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  addressone: {
    type: String,
    required: true,
  },
  addresstwo: {
    type: String,
    required: false,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  ZIP: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model("Regs", CustomerSchema);

module.exports = Registration;
