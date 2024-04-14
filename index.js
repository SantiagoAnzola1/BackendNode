const express = require('express')
const mongoose = require('mongoose')
const uri=require('./mongo.js')

const productRoutes = require('./routes/product.route.js')
const brandRoutes = require('./routes/brand.route.js')
const userRoutes= require('./routes/user.route.js')
const priceRoutes= require('./routes/price.route.js')


const app = express()
app.use(express.json())
const PORT=3000
app.listen(PORT)


app.get('/', function (req, res) {
  res.send('API Sneakers')
})

// routes
app.use('/products', productRoutes)
app.use('/brands', brandRoutes)
app.use('/users', userRoutes)
app.use('/price', priceRoutes)

mongoose.connect(uri)
.then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))


  module.exports = app