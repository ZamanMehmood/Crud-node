const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const controller=require('../controllers/category.controller');
 

router.get("/", controller.getCategories);
router.get("/:id", controller.getCategoryById);


router.post("/createCategories", controller.categories);

router.put("/:id", controller.updateCategories);
router.delete("/:id", controller.deleteCategories);

module.exports = router;