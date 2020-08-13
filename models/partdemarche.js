/*const mongoose = require("mongoose");
const PartdemarcheSchema = new mongoose.Schema({
  prix: { type: String },
  unité: { type: String, $in: ["kg", "pièce"] }
  
});



module.exports = mongoose.model("Partdemarche", PartdemarcheSchema);*/


const mongoose = require("mongoose");

const PartdemarcheSchema = mongoose.Schema({
  prix: { type: String },
  unité: { type: String, $in: ["kg", "pièce"] },
    product: {type:mongoose.Schema.Types.ObjectId,ref:'product'} //kifha produit part de marché()
});

module.exports = mongoose.model("partdemarche", PartdemarcheSchema);
