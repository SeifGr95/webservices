const mongoose = require('mongoose') ; 
const UserSchema = new mongoose.Schema({
    'name':String, 
    'firstname' : String, 
    'email':String, 
    'password':String,
    "role":Number 

}); 

module.exports = mongoose.model('User',UserSchema);