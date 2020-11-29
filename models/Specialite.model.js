const mongoose = require("mongoose");
const typeSchema = new mongoose.Schema({
    'title':String, 
   
  
});

module.exports = mongoose.model("Specialite", typeSchema);
