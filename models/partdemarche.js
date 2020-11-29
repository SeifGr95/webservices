/*const mongoose = require("mongoose");
const PartdemarcheSchema = new mongoose.Schema({
  prix: { type: String },
  unité: { type: String, $in: ["kg", "pièce"] }
  
});



module.exports = mongoose.model("Partdemarche", PartdemarcheSchema);*/


const mongoose = require("mongoose");

const PartdemarcheSchema = mongoose.Schema({
  prix: { type: String },
  unite: { type: String, $in: ["kg", "piece"] },
  product: {type:mongoose.Schema.Types.ObjectId,ref:'Product'} 
})

module.exports = mongoose.model("partdemarche", PartdemarcheSchema);
