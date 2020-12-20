const mongoose = require('mongoose') ; 
const UserSchema = new mongoose.Schema({
    'name':String, 
    'firstname' : String, 
    'email':String, 
    'password':String,
    "type":String, 
    "favoris":[{type:mongoose.Schema.Types.ObjectId,ref:'Event'}] ,
    "token" : String 
}); 

module.exports = mongoose.model('User',UserSchema);