const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course");
const Video = require("./models/Video");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected for seeding"))
  .catch(err => console.log("❌ DB Error:", err));

const seed = async () => {
  await Course.deleteMany();
  await Video.deleteMany();

  const courses = [
    { title: "Web Development", count: 120, categoryType: "main" },
    { title: "Data Science", count: 95, categoryType: "main" },
    { title: "Electrician", count: 50, categoryType: "main" },
    { title: "Beautician", count: 25, categoryType: "main" },
    { title: "Plumbing", count: 40, categoryType: "more" },
    { title: "Driving", count: 20, categoryType: "more" },
    { title: "Tailoring", count: 30, categoryType: "more" },
  ];

  const videos = [
    {
      title: "IT",
      count: 120,
      categoryType: "main",
      pdfLink: "https://example.com/webdev-notes.pdf",
      videoLink: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
      description: "Learn the structure of the web.",
      thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "Graphic design",
      count: 95,
      categoryType: "main",
      pdfLink: "https://example.com/datasci-notes.pdf",
      videoLink: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
      description: "Master layout with Flexbox.",
      thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "Business",
      description: "Interact with the web page.",
      thumbnail: "https://i.ytimg.com/vi/0ik6X4DJKCc/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "Art",
      description: "Start building apps with React.",
      thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "Node.js Introduction",
      description: "Learn server-side JavaScript.",
      thumbnail: "https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "Express.js Basics",
      description: "Build web applications with Express.",
      thumbnail: "https://i.ytimg.com/vi/L72fhGm1tfE/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title: "MongoDB Overview",
      description: "Learn about NoSQL databases.",
      thumbnail: "https://i.ytimg.com/vi/1j0c8d2a9b4/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      title:"Digital marketing",
      description: "Understand digital marketing strategies.",
      thumbnail: "https://i.ytimg.com/vi/IY8SPoyehxU/maxresdefault.jpg",
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp
    }
  ];

  await Course.insertMany(courses);
  await Video.insertMany(videos);

  console.log("✅ Sample data inserted");
  process.exit();
};

seed();
