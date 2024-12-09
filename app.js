const express = require("express");
const bodyParser = require("body-parser");
const cokieParser = require("cookie-parser");

const authRoute = require("./routes/authRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(cokieParser());
app.use(express.json());

app.use("/auth", authRoute);

app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

module.exports = app;
