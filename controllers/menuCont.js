const Menu = require("../models/menuModel.js");
const { uploadCloudinary } = require("../utils/cloudinary.js");

// add a new menu item
exports.addMenuItem = async (req, res) => {
  try {
    const { englishName, hindiName, price, category } = req.body;
    const image = req.file;

    if (!englishName || !hindiName || !price || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const uploadedImage = await uploadCloudinary(image.path);

    const newMenuItem = new Menu({
      englishName,
      hindiName,
      price,
      category,
      image: uploadedImage.url,
    });

    await newMenuItem.save();

    res.status(201).json({
      success: true,
      newMenuItem,
      message: "Menu item added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: "failed",
      message: error.message,
    });
  }
};

// get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    let { category } = req.query;
    if (!category) {
      res.status(400).json({
        success: false,
        message: "category is required",
      });
    }
    console.log(category.split(" ").join("").toLowerCase());
    category = category.split(" ").join("").toLowerCase();
    let menuItems;
    menuItems = await Menu.find({
      category: category,
    });
    res.status(200).json({
      success: true,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: "failed",
      message: error.message,
    });
  }
};
