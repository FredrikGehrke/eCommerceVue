const route = require('express').Router()
const productModel = require('../models/product/productModel')

route.post('/import', productModel.addProducts)
// route.post('/register', productModel.registerProduct)

route.get('/', productModel.getProducts)
route.get('/:id', productModel.getProductById)

module.exports = route