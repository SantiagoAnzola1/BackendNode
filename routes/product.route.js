
const express = require('express')
const router =express.Router()

const { getProducts, getProductsByName, createProduct } = require('../controllers/product.controller')


router.get('/', getProducts)
router.get('/:name', getProductsByName)
router.post('/', createProduct)

module.exports = router
