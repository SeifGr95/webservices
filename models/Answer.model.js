const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
  answer: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: {type:mongoose.Schema.Types.ObjectId,ref:'Question'} //kifha produit part de marché()
});

module.exports = mongoose.model("Answer", AnswerSchema);
