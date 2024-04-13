const Brand = require('../models/brand.models')
const getBrands = async (req, res) => {
    
    try{
        const brands= await Brand.find()
        res.status(200).json(brands)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getBrandsById = async (req, res) => {
    try{
        const {id} = req.params
        const brand= await Brand.findById(id)
        res.status(200).json(brand)   
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const createBrand = async (req, res) => {

    try{
        const brand= await Brand.create(req.body)
        res.status(200).json(brand)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {getBrands, getBrandsById, createBrand}