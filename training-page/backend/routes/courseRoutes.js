const Course = require("../models/Course");

router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    const saved = await course.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "❌ Failed to create course" });
  }
});
