const mongoose = require('mongoose') ; 
const commisariatSchema = new mongoose.Schema({
    'name_com':String, 
    'ville_com':String,
    'adresse_com' : String, 
    'email_com':String, 
    'tel_com':String,
    'verification':String,
    

}); 

module.exports = mongoose.model('commisariat',commisariatSchema);