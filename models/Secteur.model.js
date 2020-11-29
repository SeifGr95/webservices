const mongoose = require("mongoose");
const typeSchema = new mongoose.Schema({
    'title':String, 
    "Specialite":[{type:mongoose.Schema.Types.ObjectId,ref:'Specialite'}] 
  
});

module.exports = mongoose.model("Secteur", typeSchema);
