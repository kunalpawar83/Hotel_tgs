const MenuCatagory = require("../models/menuCatagoryModel.js");
const { uploadCloudinary } = require("../utils/cloudinary.js");

exports.Create = async (req, res) => {
  try {
    const file = req.file;
    const { englishName, hindiName } = req.body;
    if (!file) {
      return res.status(400).json({
        message: "Please upload a menuCategory file",
      });
    }
    const MenuCatagoryImage = await uploadCloudinary(file.path);
    // if (!MenuCatagoryImage) {
    //   return res.status(400).json({
    //     message: "Please upload a menuCategory file",
    //   });
    // }
    const menuCategory = new MenuCatagory({
      englishName,
      hindiName,
      image: MenuCatagoryImage.url,
    });
    await menuCategory.save();
    return res.status(201).json({
      message: "Menu Category created successfully",
      menuCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// get all menu categories
exports.GetAll = async (req, res) => {
  try {
    const menuCategories = await MenuCatagory.find();
    return res.status(200).json({
      message: "All menu categories",
      menuCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
