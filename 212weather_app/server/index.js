const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Clothing = require("./clothingModel");

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/weatherApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.get("/api/clothing", async (req, res) => {
  try {
    const clothing = await Clothing.find({});
    res.json(clothing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
