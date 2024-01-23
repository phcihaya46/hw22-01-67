const express = require("express")
const productController = require("../controllers/product-controller")

const rounter = express.Router()

rounter.get("/landing",productController.getProductLanding)
rounter.get("/",productController.getProducts)///เอาตัวนี้ขึ้นก่อนเพราะจะได้ทำตัวนี้ด้วย
rounter.get("/:productId",productController.getProductByID)


module.exports = rounter