const Product = require("../models/productModel");
const asyncHandler=require('express-async-handler')

exports.createProduct = async (req, res) => {
  const products = new Product(req.body);
  try {
    const savedProducts = products.save();
    res.json(savedProducts);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// @desc Fetch All products
// @route GET /api/products
// @acess Public
exports.getProducts= asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
})

// @desc single All product
// @route GET /api/products/:id
// @acess Public
exports.getProductById=asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.json({ message: "Product not found" });
  }
})