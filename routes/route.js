const express = require("express");
const router = express.Router();
const productRoute = require("../routes/product.routes");


router.use("/products",productRoute);