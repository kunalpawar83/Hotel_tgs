const express = require("express");
const bodyParser = require("body-parser");
const cokieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const menuCategoryRoute = require("./routes/menucateoryRoute");
const menuRoute = require("./routes/menuRoute");

require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(cokieParser());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoute);
app.use("/menu-category", menuCategoryRoute);
app.use("/menu", menuRoute);

app.get("*", (req, res) => {
  res.status(404).json({
    success: true,
    message: "Page not found",
  });
});

module.exports = app;
