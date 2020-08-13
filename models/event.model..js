const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
  title: { type: String },
  type: { type: String, $in: ["formation", "foir"] },
  lieu: { type: String },
  date: { type: String },
  description: { type: String },
  contenu: { type: String }
});

module.exports = mongoose.model("Event", EventSchema);
