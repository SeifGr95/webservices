const mongoose = require('mongoose'); 
const Event = require('./event.model.')
const User = require('./User.model')
const experts = require('./Expert.model')

const NotificationSchema = new mongoose.Schema({

    contenu: { type: String },
    vu : { type : Boolean , default : false},

    fromuserid: { type: mongoose.Schema.Types.ObjectId , ref : User },
    touserid: { type: mongoose.Schema.Types.ObjectId, ref : experts },
    to : {type : String}
    
  }
  ,
  { timestamps: { createdAt: 'created_at' } });
 


module.exports = mongoose.model('Notification',NotificationSchema); 
