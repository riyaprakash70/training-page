import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TrainingPage.css";

import Image1 from "./assets/your-image1.png";
import Image2 from "./assets/your-image2.png";

const TrainingPage = () => {
const [showMoreCourses, setShowMoreCourses] = useState(false);
const [selectedVideo, setSelectedVideo] = useState(null);
const [scrollPaused, setScrollPaused] = useState(false);
const categoriesRef = useRef(null);

const getEmbeddedURL = (url) => {
  if (!url) return "";
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  } else if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url; // fallback
};

const YouTubePlayer = ({ videoLink }) => {
  const embedURL = videoLink.replace("watch?v=", "embed/");

  return (
    <iframe
      width="100%"
      height="400"
      src={embedURL}
      title="Training Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

// Usage:
<YouTubePlayer videoLink="https://www.youtube.com/watch?v=r0kYwYZSd70" />

const videoList = [
  {
    title: "Learn Excel Basics",
    description: "Master spreadsheets for work and school.",
    src: "https://www.youtube.com/embed/wbJcJCkBcMg",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_6Xp1knfREt4kWlSDRHCoAng1k1-NKk1jg&s",
  },
  {
    title: "Intro to AI/ML",
    description: "Understand the fundamentals of AI and machine learning.",
    src: "https://www.youtube.com/embed/2z9Nn4TxkD0",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhr2cSO6OuRaajE-tYqhSaFSRxU0wzEk1R8w&s",
  },
  {
    title: "English Speaking Course",
    description: "Improve your spoken English and boost confidence.",
    src: "https://www.youtube.com/embed/o91M2hE0x3M",
    thumbnail: "https://img.freepik.com/free-vector/flat-youtube-thumbnail-english-learning-lessons_23-2149255556.jpg?w=360",
  },
  {
    title: "Graphic Design Mastery",
    description: "Learn Photoshop, Illustrator, and visual design principles.",
    src: "https://www.youtube.com/embed/5_FLHvq4Wwg",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34JDieIHLpex9UpekyRRJh0cxptmmS8szUA&s",
  },
  {
    title: "Cybersecurity for Beginners",
    description: "Protect systems and data in the digital age.",
    src: "https://www.youtube.com/embed/1rP3nNY2hTo",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs6FRKVxzkS0F12yN3qxUb9cKeVp8zSmzxg&s",
  },
  {
    title: "Data Science with Python",
    description: "Analyze data, build models, and create visualizations.",
    src: "https://www.youtube.com/embed/r-uOLxNrNk8",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_09weZXzLA9Y2z96lA7jcdyP2xiV8lgAqg&s",
  },
  {
    title: "Public Speaking Bootcamp",
    description: "Build confidence and speak with impact.",
    src: "https://www.youtube.com/embed/tShavGuo0_E",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy02oYKhv7ne25H9KI0odxz5FtS2G2lXLU8A&s",
  },
  {
    title: "Resume Writing Workshop",
    description: "Craft a resume that lands interviews.",
    src: "https://www.youtube.com/embed/KzYv5vJVMfM",
    thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/275571573/original/6037ea44817f2c9ee1cb1241f11a941c4aaeaa85/design-or-edit-professional-resume-or-cv-template-in-8-hours.png",
  },
  {
    title: "Mobile App Development",
    description: "Build Android & iOS apps using React Native.",
    src: "https://www.youtube.com/embed/Hf4MJH0jDb4",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGd3c5vlRGp2F6m5gH9GbnKeJmIE6_goC8kA&s",
  },
  {
    title: "Marketing Strategy 101",
    description: "Learn to build customer-driven marketing plans.",
    src: "https://www.youtube.com/embed/0uh1kRUHuaQ",
    thumbnail: "https://w7.pngwing.com/pngs/773/577/png-transparent-technology-strategy-organization-marketing-strategy-strategic-planning-strategy-love-text-people-thumbnail.png",
  },
  {
    title: "Introduction to Finance",
    description: "Understand budgeting, investing, and saving basics.",
    src: "https://www.youtube.com/embed/4n1LpjK0h9Y",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FBJhJ46tJD-WS_Shfv2JCozISh9Bb2h5zw&s",
  },
  {
    title: "Photography Fundamentals",
    description: "Master camera settings and composition techniques.",
    src: "https://www.youtube.com/embed/wF_YG9GKsYg",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjaVDmNr-KZUf7HrbaAPJWxu3KEgupkujMw&s",
  },
  {
    title: "Content Writing Essentials",
    description: "Learn to write engaging articles and blogs.",
    src: "https://www.youtube.com/embed/2Upt5WJ1T60",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr8Mug5f5Cn4ff0--_ire91DVPFQbNRD3UA&s",
  },
  {
    title: "Sales Techniques for Success",
    description: "Master the art of selling and closing deals.",
    src: "https://www.youtube.com/embed/U-MDTQ-4U0k",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMte0Iggv8FB6wmKLC1MqLtn3KHZbEsRFw6w&s",
  },
  {
    title: "HR Management Basics",
    description: "Understand recruitment, training, and employee relations.",
    src: "https://www.youtube.com/embed/aPEUKLxxh_k",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aVHNy9UMc1jksZTnnD0nPPo8MvsWvb9kEA&s",
  }
];


const openVideoPopup = (video) => {
  setSelectedVideo(video);
  document.body.style.overflow = "hidden";
};

const closeVideoPopup = () => {
  setSelectedVideo(null);
  document.body.style.overflow = "auto";
};

const stopScrolling = () => {
  setScrollPaused(true);
};

const resumeScrolling = () => {
  setScrollPaused(false);
};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleAllCoursesClick = () => {
    setShowMoreCourses(!showMoreCourses);
  };
  const scrollToCategories = () => {
  if (categoriesRef.current) {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  }
};


  const mainCourses = [
    { title: "IT", count: "120+",pdfLink: "/notes/it-notes.pdf",videoLink: "https://www.youtube.com/embed/h-_x4naw-gU?list=PLuuQCKO44unvf_XcpDt8J69vVPSn5-uNr" },
    { title: "Graphic design", count: "318+", pdfLink: "/notes/graphic-design-notes.pdf", videoLink: "https://www.youtube.com/embed/5_FLHvq4Wwg?list=PLK1_9VA534IhRtQJYOtvN92Kb6T6vim7I" },
    { title: "Business", count: "73+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/PHhQuiM2XWI"  },
    { title: "Art", count: "123+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/bnLrIO4J8To" },
    { title: "Digital marketing", count: "230+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/IY8SPoyehxU" },
    { title: "Development", count: "63+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/ZxKM3DCV2kE" },
    { title: " English Language", count: "310+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/ig3irLa0eu0" },
  ];

  const moreCourses = [
    { title: "Photography", count: "88+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/yhAmMUi2NmM" },
    { title: "Data Science", count: "142+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/data-science-course" },
    { title: "AI & ML", count: "95+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/ai-ml-course" },
    { title: "Content Writing", count: "120+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/content-writing-course" },
    { title: "Finance", count: "76+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/finance-course" },
    { title: "HR Management", count: "61+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/hr-management-course" },
    { title: "Cybersecurity", count: "105+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/cybersecurity-course" },
    { title: "Public Speaking", count: "84+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/public-speaking-course" },
    { title: "Marketing Strategy", count: "101+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/marketing-strategy-course" },
    { title: "Psychology", count: "93+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/psychology-course" },
    { title: "Sales", count: "112+",pdfLink: "/notes/it-notes.pdf", videoLink: "https://www.youtube.com/embed/sales-course" },
    { title: "Mobile App Dev", count: "134+",pdfLink: "/notes/it-notes.pdf", videoLink: "/videos/mobile-app-dev-course.mp4" },
  ];

const [selectedCourse, setSelectedCourse] = useState(null);
const [showModulePopup, setShowModulePopup] = useState(false);
const [showVideoPopup, setShowVideoPopup] = useState(false);


 return (
  <>
    <div className="training-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text" data-aos="fade-right">
          <h1>
            Acquiring <em>skills</em> for a brighter career
          </h1>
          <p>
            Our platform offers a wide range of courses and resources designed
            to help you acquire new competencies, stay current with industry
            trends, and improve your employability.
          </p>
          <div className="search-box">
            <input type="text" placeholder="Enter course" />
            <button>Search</button>
          </div>
          <div className="stats">
            <div>
              <h2>15k+</h2>
              <p>Fresh graduates</p>
            </div>
            <div>
              <h2>6+</h2>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={Image1} alt="Student Learning" />
        </div>
      </section>

      {/* Learning Modes */}
      <section className="learning-modes" data-aos="zoom-in">
        <h2>
          Enjoy <em>learning</em> with video, audio and live classes
        </h2>
        <p>
          Our platform offers high-quality video tutorials, on-the-go audio
          lessons, and interactive live classes to suit your learning style and
          schedule.
        </p>
        <button onClick={scrollToCategories}>Visit Courses</button>
      </section>

      {/* Career Section */}
      <section className="career">
        <div className="career-image" data-aos="fade-right">
          <img src={Image2} alt="Career Growth" />
        </div>
        <div className="career-text" data-aos="fade-left">
          <h2>
            Expand your <em>career opportunities</em>
          </h2>
          <p>
            We offer a dynamic and supportive work environment where your
            talents can flourish. With opportunities for professional growth,
            continuous learning, and meaningful contributions, you’ll be
            empowered to achieve your career aspirations.
          </p>
          <div className="career-points">
            <div>
              <h3>💸 4000+ courses</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <h3>🌐 World-class education</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" data-aos="fade-up" ref={categoriesRef}>
        <h2>
          Explore 4000+ <em>free</em> online courses
        </h2>
        <p>
          Our platform offers high-quality video tutorials, on-the-go audio
          lessons, and interactive live classes to suit your learning style and
          schedule.
        </p>

        <div className="category-grid">
          {mainCourses.map((cat, i) => (
            <div
              key={cat.title}
              className="category-box"
              data-aos="zoom-in"
              data-aos-delay={i * 100}onClick={() => setSelectedCourse(cat)}
            >
              <h3>{cat.title}</h3>
              <p>{cat.count} Courses</p>
            </div>
          ))}

          {!showMoreCourses && (
            <div className="category-box all" data-aos="zoom-in">
              <button onClick={handleAllCoursesClick}>All Courses →</button>
            </div>
          )}
        </div>

        {showMoreCourses && (
          <>
            <div className="more-courses" data-aos="fade-up">
              {moreCourses.map((cat, i) => (
                <div
                  key={cat.title}
                  className="category-box"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  onClick={() => setSelectedCourse(cat)}
                >
                
                  <h3>{cat.title}</h3>
                  <p>{cat.count} Courses</p>
                </div>
              ))}
            </div>
            <div className="category-box all center-btn" data-aos="fade-up">
              <button onClick={handleAllCoursesClick}>Hide Courses ↑</button>
            </div>
          </>
        )}
      </section>

      {/* Video Learning Showcase Section */}
      <div className="page-content">
        <section className="video-showcase" data-aos="fade-up">
          <h2 className="tagline">
            <span className="scroll-left">Watch.</span>
            <span className="scroll-center">Learn.</span>
            <span className="scroll-right">Grow.</span>
          </h2>

          <div className="video-track-wrapper">
            <div className="video-track left-to-right">
              {[...videoList.slice(0, 6), ...videoList.slice(0, 6)].map(
                (video, index) => (
                  <div
                    className="video-box"
                    key={index}
                    onClick={() => openVideoPopup(video)}
                    onMouseEnter={stopScrolling}
                    onMouseLeave={resumeScrolling}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="video-thumbnail"
                    />
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <p>{video.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="video-track right-to-left">
              {[...videoList.slice(6), ...videoList.slice(6)].map(
                (video, index) => (
                  <div
                    className="video-box"
                    key={index}
                    onClick={() => openVideoPopup(video)}
                    onMouseEnter={stopScrolling}
                    onMouseLeave={resumeScrolling}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="video-thumbnail"
                    />
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <p>{video.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-aos="fade-up">
          <h2>
            10K+ <em>students</em> take these courses. <br />
            What are you waiting for?
          </h2>
          <button>Get Started Now</button>
        </section>
      </div>

      {/* 📺 Fullscreen Video Popup */}
      {selectedVideo && (
        <div className="video-popup" onClick={closeVideoPopup}>
          <div className="video-popup-content">
            <video controls autoPlay src={selectedVideo.src}></video>
            <p className="popup-description">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
    {/* Course Options Popup */}
    {selectedCourse && (
  <div className="fullscreen-popup" onClick={() => setSelectedCourse(null)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <h2>{selectedCourse.title}</h2>
      <p>Select an option to continue:</p>

      <div className="popup-buttons">
        <button onClick={() => setShowModulePopup(true)}>📘 View Modules</button>
        <button onClick={() => setShowVideoPopup(true)}>🎥 Watch Video</button>
      </div>
    </div>
  </div>
)}

{/* Module Notes Popup */}
      {showModulePopup && (
        <div className="fullscreen-popup" onClick={() => setShowModulePopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>📘 Module Notes - {selectedCourse.title}</h2>
            <p>This is a preview of your course notes.</p>
            <div className="notes-preview">
              <p>💡 Here you can write dynamic content like brief notes or headings...</p>
            </div>
            {/* PDF Download Button */}
             <a href={selectedCourse?.pdfLink || "/notes/fallback.pdf"} download className="download-btn">
              ⬇️ Download Notes (PDF)
             </a>
          </div>
        </div>
      )}

{/* Watch Video Popup */}
        {showVideoPopup && selectedCourse && (
  <div className="fullscreen-popup" onClick={() => setShowVideoPopup(false)}>
    <div className="popup-content video-only" onClick={(e) => e.stopPropagation()}>
      <h2>🎥 Video - {selectedCourse.title}</h2>
      <iframe
        width="100%"
        height="400"
        src={
          selectedCourse.videoLink.includes("watch?v=")
            ? selectedCourse.videoLink.replace("watch?v=", "embed/") + "?autoplay=1"
            : selectedCourse.videoLink
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}
    </>
  );
};

export default TrainingPage;