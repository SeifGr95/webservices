const mongoose = require('mongoose'); 
const Event = require('./event.model.')
const User = require('./User.model')
const FavorisSchema = new mongoose.Schema({

    id_event: { type: mongoose.Schema.Types.ObjectId , ref : Event },
    id_user: { type: mongoose.Schema.Types.ObjectId, ref : User}
    
  });
 


module.exports = mongoose.model('Favori',FavorisSchema); 
