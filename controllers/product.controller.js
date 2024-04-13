const Product = require('../models/product.models')
const getProducts = async (req, res) => {
    try{
        const products= await Product.find()
        res.status(200).json(products)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getProductsByName = async (req, res) => {
    try{
        const {name} = req.params
        const product= await Product.find({ name: name })
        res.status(200).json(product)   
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const createProduct = async (req, res) => {
    try{
        const product= await Product.create(req.body)
        res.status(200).json(product)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {getProducts, getProductsByName, createProduct}