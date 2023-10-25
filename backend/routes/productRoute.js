const express=require('express');
const { getAllProducts } = require('../controllers/productController');

const router = express.router();


router.route("/product").get(getAllProducts)


module.exports = router
  