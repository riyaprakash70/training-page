const express = require("express");
const router = express.Router();
const { downloadNotes } = require("../controllers/notesController");

router.get("/:courseId", downloadNotes);
module.exports = router;
