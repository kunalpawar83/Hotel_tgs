const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  englishName: String,
  hindiName: String,
  price: Number,
  category: String,
  image: {
    type: Object,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
