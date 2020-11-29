const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  contenu: { type: String },
  image:{type:String},
},{ timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model("News", NewsSchema);
