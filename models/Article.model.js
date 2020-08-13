const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({
  title: { type: String },
  type: { type: String, $in: ["animal", "vegitale"] },
  description: { type: String },
  contenu: { type: String },
});

module.exports = mongoose.model("Article", ArticleSchema);
