const Video = require("../models/videoModel");

const addVideo = async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const video = new Video({ title, url, description });
    const saved = await video.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Error saving video", details: err.message });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: "Error fetching videos" });
  }
};

module.exports = { addVideo, getVideos };
