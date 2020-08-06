const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
  answer: String,
  User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Answer", AnswerSchema);
