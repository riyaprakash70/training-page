const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  try {
    const main = await Course.find({ categoryType: "main" });
    const more = await Course.find({ categoryType: "more" });
    res.json({ mainCourses: main, moreCourses: more });
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to fetch courses" });
  }
};
