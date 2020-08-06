const mongoose = require('mongoose'); 
const AnswerModel = require('./Answer.model');

const QuestionSchema = mongoose.Schema({
title:{type:String}, 
type : {type:String,$in:["animal","vegitale"]}, 
description:{type:String},
answers:[{type:mongoose.Schema.Types.ObjectId,ref:'Answer'}]

}) ; 

module.exports = mongoose.model('Question',QuestionSchema); 