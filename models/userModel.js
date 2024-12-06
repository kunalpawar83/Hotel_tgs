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
    type: Number,
    required: [true, "Phone number is required"],
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
