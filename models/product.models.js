const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter the product name"]
    }, 
    price:{
        type: Number,
        required:  [true, "Please enter the product price"],
        default:0
    },
    stock:{
        type: Number,
        required:  [true, "Please enter the product stock"],
        default:0
    },
    brand: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Brand', required: false 
    }
},
{
    timestamps: true
})

const Product= mongoose.model("Product", productSchema);
module.exports = Product