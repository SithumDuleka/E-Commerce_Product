const { request } = require("express");
const productService = require("../service/product.service");

const getAll = async (req, res) => {
  const products = await productService.getAll();
  res.status(200).json({
    data: products,
  });
};

const getByID = async (req, res) => {
  const ID = req.params.id;
  const product = await productService.getByID(ID);
  res.status(200).json({ data: product });
};

const createProduct = async (req, res) => {
  try {
    console.log("Incoming data:", req.body); 
    const product = await productService.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    console.error("Error creating product:", err);
    res
      .status(500)
      .json({ message: "Failed to create product", error: err.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await productService.update(id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    console.error("Error updating product:", err);
    res
      .status(err.status || 500)
      .json({ message: err.message || "Failed to update product" });
  }
};

module.exports = {
  getAll,
  getByID,
  createProduct,
  updateProduct,
};
