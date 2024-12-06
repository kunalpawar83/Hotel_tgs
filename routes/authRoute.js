const express = require("express");
const router = express.Router();
const authCont = require("../controllers/authCont.js");

router.post("/signup", authCont.SignUp);
router.post("/login", authCont.LogIn);

module.exports = router;
