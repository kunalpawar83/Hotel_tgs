const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    minlength: [10, "Phone number must be 10 "],
    maxlength: [10, "Phone number must be 10 "],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
