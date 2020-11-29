const mongoose = require('mongoose') ; 
const ExpertSchema = new mongoose.Schema({
    'name':String, 
    'firstname' : String, 
    'email':String, 
    'tel_exp':String,
    'ville_exp':String,
    'verification':String,
    'password':String,
    "Specialite":{type:mongoose.Schema.Types.ObjectId,ref:'Specialite'}

}); 

module.exports = mongoose.model('Expert',ExpertSchema);