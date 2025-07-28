const path = require("path");

exports.downloadNotes = (req, res) => {
  const { courseId } = req.params;

  // Later, you can map courseId to actual PDF
  const filePath = path.join(__dirname, "../uploads/sample-notes.pdf");
  res.download(filePath, `${courseId}-notes.pdf`);
};
