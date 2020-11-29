const mongoose = require('mongoose') ; 
const rdvSchema = new mongoose.Schema({
    'date_rdv':String, 
    'sujet_rdv':String,
    'lieu_rdv' : String, 
    client: {type:mongoose.Schema.Types.ObjectId,ref:'User'} ,
    expert: {type:mongoose.Schema.Types.ObjectId,ref:'Expert'}, 

    Etat : {type : Number , default : 0 }

}); 

module.exports = mongoose.model('rdv',rdvSchema);