const { request } = require("express");

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

module.exports ={getAll,getByID};