const MenuCatagory = require("../models/menuCatagoryModel.js");

exports.Create = async (req, res) => {
  const file = req.file;
  const { englishName, hindiName } = req.body;
  const newMenuCatagory = new MenuCatagory({
    englishName,
    hindiName,
    image: file.path,
  });
  res.status(200).json({
    newMenuCatagory,
    message: "Create",
  });
};
