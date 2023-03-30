const express = require('express');
const { createCategory } = require('../controllers/categoryControl');
const { createCheckout } = require('../controllers/checkoutControls');
const { createProduct } = require('../controllers/productControl');
const { createStock } = require('../controllers/stockControl');
const { registerUser, loginUser } = require('../controllers/userControl');

const routeManager = express.Router();

routeManager.post('/auth/register', registerUser);
routeManager.post('/auth/login', loginUser);
routeManager.post('/addProduct', createProduct);
routeManager.post('/addCategory', createCategory);
routeManager.post('/addStock', createStock)
routeManager.post('/checkout', createCheckout )

module.exports = routeManager;
