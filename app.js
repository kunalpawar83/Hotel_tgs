const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./utils/connectDB");

const authRoute = require("./routes/authRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoute);

app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

module.exports = app;
