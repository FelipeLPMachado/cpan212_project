const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  name: String,
  minTemp: Number,
  maxTemp: Number,
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
