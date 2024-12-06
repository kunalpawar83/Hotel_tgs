const express = require("express");
const router = express.Router();
const authCont = require("../controllers/authCont.js");

router.post("/signup", authCont.SignUp);

module.exports = router;
