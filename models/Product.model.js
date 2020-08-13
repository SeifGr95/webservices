const mongoose = require('mongoose'); 

const ProductSchema = new mongoose.Schema({

    title: { type: String },
    type: { type: String, $in: ["fruit", "légume","viande"] }
  });
 


module.exports = mongoose.model('Product',ProductSchema); 
