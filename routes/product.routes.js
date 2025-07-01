const express = require("express");
const router =express.Router();
const asyncHandler = require('express-async-handler');
const productController=require('../controller/product.controller')

router.get('/',asyncHandler(productController.getAll));
router.get('/:id',asyncHandler(productController.getByID));

module.exports=router;
