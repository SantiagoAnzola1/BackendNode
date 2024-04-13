const User = require('../models/user.models')
const Brand = require('../models/brand.models')
const Product = require('../models/product.models')
const getSpecialPriceBrandByUser = async (req, res) => {
    
    try{
        const {user_id,product_name} = req.params
        const user= await User.findById(user_id)
        if (!user) return res.status(404).json({message: 'User not found'})
        
        const product= await Product.findOne({ name: product_name })
        if (!product) return res.status(404).json({message: 'Product not found'})
       
        const brand= await Brand.findOne(product.brand)
        const brandWithSpecialPrice = user.discountedBrands.find(userBrand => String(userBrand.brand) === String(product.brand));
  
        if(brandWithSpecialPrice){
          return res.status(200).json({discountPrice: brandWithSpecialPrice.discountPrice})
        } else{
          return res.status(200).json({price: product.price})
        }
  
        res.status(200).json(user)   
      }catch(error){
        res.status(500).json({message:error.message})
      }
}

module.exports = {getSpecialPriceBrandByUser}