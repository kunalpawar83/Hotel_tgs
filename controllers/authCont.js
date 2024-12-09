const User = require("../models/userModel");
const { generateTokenAndSetCookie } = require("../middleware/jwt.js");

// Sign up a new user
exports.SignUp = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const existUser = await User.findOne({ email });
    if (!name || !email || !phoneNumber) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all fields",
      });
    }
    if (phoneNumber.length !== 10) {
      return res.status(400).json({
        success: false,
        error: "Phone number must be 10 digits",
      });
    }
    const phoneNumberExist = await User.findOne({ phoneNumber });
    if (phoneNumberExist) {
      return res.status(400).json({
        success: false,
        error: "Phone number already exists",
      });
    }
    if (existUser) {
      return res.status(400).json({
        success: false,
        error: "User already exists",
      });
    }
    const user = await User.create({ name, email, phoneNumber });
    generateTokenAndSetCookie(res, user._id);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Log in an existing user
exports.LogIn = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    generateTokenAndSetCookie(res, user._id);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
