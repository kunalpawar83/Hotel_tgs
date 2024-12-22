const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuCatagorySchema = new Schema(
  {
    englishName: {
      type: String,
      required: true,
    },
    hindiName: {
      type: String,
    },
    image: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MenuCatagory", menuCatagorySchema);
