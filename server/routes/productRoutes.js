const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

router.route("/create").post(createProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
module.exports = router;
