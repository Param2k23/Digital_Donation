const express = require("express")
const categoryController = require("../controller/categoryController")

const router = express.Router()

router.post("/addcategory",categoryController.addCategory)
router.get("/listcategory",categoryController.getAllCategory)
router.delete("/category/:categoryId",categoryController.deleteCategoryById)
router.put("/category",categoryController.updateCategory)

module.exports = router