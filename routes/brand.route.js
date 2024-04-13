const express = require('express')
const router =express.Router()

const { createBrand, getBrandsById, getBrands } = require('../controllers/brand.controller')

router.get('/', getBrands)
router.get('/:id', getBrandsById )
router.post('/', createBrand)

  module.exports = router
