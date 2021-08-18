// exports.createCustomer = (req, res) => {
//   const customer = new Customer({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     address1: req.body.address1,
//     address2: req.body.address2,
//     city: req.body.city,
//     state: req.body.state,
//     zip: req.body.zip,
//     country: req.body.country,
//   });

//   // Save a Customer in the MongoDB
//   customer
//     .save()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: "Fail!",
//         error: err.message,
//       });
//     });
// };
