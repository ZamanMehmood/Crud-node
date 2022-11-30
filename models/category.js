const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
