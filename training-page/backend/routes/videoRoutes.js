const express = require("express");
const router = express.Router();
const { addVideo, getVideos } = require("../controllers/videoController");

router.post("/", addVideo);
router.get("/", getVideos);

module.exports = router;
