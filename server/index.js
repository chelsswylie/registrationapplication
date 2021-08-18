const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Chels:Chewy1109!@cluster0.tdspp.mongodb.net/Registration"
);

app.use("/", require("./routes/registrationrouter"));

app.get("/registration", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
