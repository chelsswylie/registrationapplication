const express = require("express");
const router = express.Router();
const registration = require("../models/customer.model");

router.route("/create").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const Address1 = req.body.Address1;
  const Address2 = req.body.Address2;
  const City = req.body.City;
  const State = req.body.State;
  const ZIP = req.body.ZIP;
  const Country = req.body.Country;
  const newRegistration = new registration({
    firstName,
    lastName,
    Address1,
    Address2,
    City,
    State,
    ZIP,
    Country,
  });

  newRegistration.save();
});

module.exports = router;
