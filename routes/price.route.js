const express = require('express')
const router =express.Router()

const { getSpecialPriceBrandByUser } = require('../controllers/price.controller')

//2. /price/{user_id}/{nombre_producto}:
router.get('/:user_id/:product_name', getSpecialPriceBrandByUser)

module.exports = router