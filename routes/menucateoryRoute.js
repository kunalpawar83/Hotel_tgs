const express = require("express");
const router = express.Router();
const menuCategoryController = require("../controllers/menuCategoryCont");
const { upload } = require("../middleware/multer.js");

router.post(
  "/menuCreate",
  upload.single("categoryImage"),
  menuCategoryController.Create
);
router.get("/menuGetAll", menuCategoryController.GetAll);

module.exports = router;
