const mongoose = require("mongoose")
const brandSchema = new mongoose.Schema({
    brandName: { 
        type: String, 
        required: true 
    },
    // discountPrice: { 
    //     type: Number, 
    //     required: false,
    //     default:0
    // } 
  })
const Brand= mongoose.model("Brand", brandSchema)
module.exports = Brand