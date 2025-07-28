const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const videoRoutes = require("./routes/videoRoutes");
app.use("/api/videos", videoRoutes);

// Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));
