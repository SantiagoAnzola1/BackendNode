const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    discountedBrands: [{
      brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
      discountPrice: { type: Number, required: true }
    }]
  });

const User= mongoose.model("User", userSchema);
module.exports = User