const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  count: Number,
  pdfLink: String, 
  videoLink: String,
  categoryType: { type: String, enum: ["main", "more"], default: "main" }
});

module.exports = mongoose.model("Course", courseSchema);
