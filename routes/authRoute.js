const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login page");
});

router.get("/", (req, res) => {
  res.send("Home page");
});

module.exports = router;
