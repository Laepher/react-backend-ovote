const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  visi: String,
  misi: String,
});

module.exports = mongoose.model("Calon", userSchema);
