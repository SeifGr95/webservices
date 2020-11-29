const mongoose = require("mongoose");
const typeSchema = new mongoose.Schema({
  title: { type: String }
  
});

module.exports = mongoose.model("Type", typeSchema);
