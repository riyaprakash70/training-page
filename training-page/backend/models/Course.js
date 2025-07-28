const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  count: Number,
  categoryType: { type: String, enum: ["main", "more"], default: "main" }
});

module.exports = mongoose.model("Course", courseSchema);
