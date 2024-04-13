const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.models')
const User = require('./models/user.models')
const Brand = require('./models/brand.models')

const app = express()



app.listen(3000)
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello sssssWorlds')
})

// 1. /products:
app.post('/products', async(req, res) => {
  try{
    const product= await Product.create(req.body)
    res.status(200).json(product)
    
  }catch(error){
    res.status(500).json({message:error.message})
  }
})
app.get('/products', async(req, res) => {
  try{
    const products= await Product.find()
    res.status(200).json(products)
    
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

app.get('/products/:name', async(req, res) => {
    try{
      const {name} = req.params
      const product= await Product.find({ name: name })
      res.status(200).json(product)   
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })


app.post('/brands', async(req, res) => {
    try{
      const brand= await Brand.create(req.body)
      res.status(200).json(brand)
      
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })
  app.get('/brands', async(req, res) => {
    try{
      const brands= await Brand.find()
      res.status(200).json(brands)
      
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })
  
  app.get('/brands/:id', async(req, res) => {
    try{
      const {id} = req.params
      const brand= await Brand.findById(id)
      res.status(200).json(brand)   
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })


  app.post('/users', async(req, res) => {
    try{
      const user= await User.create(req.body)
      res.status(200).json(user)
      
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })
  app.get('/users', async(req, res) => {
    try{
      const user= await User.find()
      res.status(200).json(user)
      
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })
  
  app.get('/users/:id', async(req, res) => {
    try{
      const {id} = req.params
      const user= await User.findById(id)
      res.status(200).json(user)   
    }catch(error){
      res.status(500).json({message:error.message})
    }
  })
 

//   2. /price/{user_id}/{nombre_producto}:

app.get('/price/:user_id/:product_name', async(req, res) => {
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
  })

mongoose.connect('mongodb://drenvio:<password>@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/ChallengeBackSantiogoA?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err))
