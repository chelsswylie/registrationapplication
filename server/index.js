const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const mongoose = require("mongoose");
<<<<<<< HEAD
=======

mongoose.connect("mongodb://localhost/mongoose_basics", function (err) {
  if (err) throw err;

  console.log("Successfully connected");
});
>>>>>>> a196e1ca1eefd616b9a7faf0ea5389356bfba475

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); /*post body parser */
app.use(pino);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Chels:Chewy1109!@cluster0.tdspp.mongodb.net/Registration"
);

app.use("/", require("./routes/registrationrouter"));

// This is where we will wnt to build the admin page
// app.get("/registration", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);

// POST call below to submit info

// app.post("/action", (req, res) => {
//   var userData = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     Address1: req.body.Address1,
//     Address2: req.body.Address2,
//     City: req.body.City,
//     State: req.body.State,
//     ZIP: req.body.ZIP,
//     Country: req.body.Country,
//   };
// });
