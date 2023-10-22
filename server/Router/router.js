const express = require('express');
const router = express.Router();
const registerController = require('../controller/userController');
const productController = require('../controller/productController')
// registration route
router.post('/register', registerController.register);
//login
router.post('/login', registerController.login);
//create product
router.post("/product",productController.createProduct)
//get all product
router.get("/getproduct",productController.getallproduct)
//get product bby id
router.get("/products/:productId",productController.productbyId)

//update product
router.put('/products/:productId',productController.updateproductbyId)

//// Delete a product listing by ID
router.delete('/products/:productId',productController.deleteproductbyId)
module.exports = router;
