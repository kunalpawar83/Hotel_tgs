const menuCont = require("../controllers/menuCont.js");
const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/multer.js");

// add a new menu item
router.post("/add-menu-item", upload.single("menuImage"), menuCont.addMenuItem);

// get all menu items
router.get("/get-all-menu-items", menuCont.getAllMenuItems);

module.exports = router;
