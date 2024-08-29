import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const VideoPage = () => {
  const { id } = useParams();

  const courses = {
    html: [
      {
        id: 1,
        title: "1. HTML for Starters",
        url: "https://www.youtube.com/embed/ICDCs-RID38",
        actionItems: [
          { text: "Newsletter for important updates", link: "#" },
          { text: "Follow for exclusive content", link: "#" },
          { text: "Leave a testimonial", link: "#" },
          { text: "Reach your income goals faster & easier", link: "#" },
        ],
      },
      {
        id: 2,
        title: "2. Tags in HTML",
        url: "https://www.youtube.com/embed/ICDCs-RID38",
        actionItems: [
          {
            text: "Join the HTML webinar",
            link: "https://example.com/webinar",
          },
          {
            text: "Download HTML cheat sheet",
            link: "https://example.com/cheatsheet",
          },
          {
            text: "Check out the HTML resources",
            link: "https://example.com/resources",
          },
        ],
      },
    ],
    css: [
      {
        id: 1,
        title: "1. Introduction to CSS",
        url: "https://www.youtube.com/embed/xyz",
        actionItems: [
          { text: "CSS Webinar", link: "https://example.com/css-webinar" },
          {
            text: "CSS Cheat Sheet",
            link: "https://example.com/css-cheatsheet",
          },
          { text: "CSS Resources", link: "https://example.com/css-resources" },
        ],
      },
      // Add more CSS video objects here
    ],
    js: [
      {
        id: 1,
        title: "1. Introduction to JavaScript",
        url: "https://www.youtube.com/embed/abc",
        actionItems: [
          { text: "JS Webinar", link: "https://example.com/js-webinar" },
          { text: "JS Cheat Sheet", link: "https://example.com/js-cheatsheet" },
          { text: "JS Resources", link: "https://example.com/js-resources" },
        ],
      },
      // Add more JS video objects here
    ],
  };

  const courseVideos = courses[id] || [];

  // Load the initial state from localStorage
  const savedVideoId = parseInt(
    localStorage.getItem(`activeVideoId-${id}`),
    10
  );
  const initialVideo =
    courseVideos.find((video) => video.id === savedVideoId) || courseVideos[0];

  const [videoUrl, setVideoUrl] = useState(initialVideo.url);
  const [activeVideoId, setActiveVideoId] = useState(initialVideo.id);
  const [videoTitle, setVideoTitle] = useState(initialVideo.title);
  const [actionItems, setActionItems] = useState(initialVideo.actionItems);

  // Update localStorage whenever activeVideoId changes
  useEffect(() => {
    localStorage.setItem(`activeVideoId-${id}`, activeVideoId);
  }, [activeVideoId, id]);

  const handleVideoChange = (video) => {
    setVideoUrl(video.url);
    setActiveVideoId(video.id);
    setVideoTitle(video.title);
    setActionItems(video.actionItems);
  };

  const handleNextLesson = () => {
    const currentIndex = courseVideos.findIndex(
      (video) => video.id === activeVideoId
    );
    const nextIndex = (currentIndex + 1) % courseVideos.length;
    const nextVideo = courseVideos[nextIndex];
    handleVideoChange(nextVideo);
  };

  const handlePreviousLesson = () => {
    const currentIndex = courseVideos.findIndex(
      (video) => video.id === activeVideoId
    );
    const prevIndex =
      (currentIndex - 1 + courseVideos.length) % courseVideos.length;
    const prevVideo = courseVideos[prevIndex];
    handleVideoChange(prevVideo);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 bg-white p-4 shadow rounded mb-4 md:mb-0">
            <nav>
              <h2 className="font-semibold text-gray-700 mb-4">
                Free {id.toUpperCase()} Course
              </h2>
              <ul className="space-y-2 p-2">
                {courseVideos.map((video) => (
                  <li
                    key={video.id}
                    className={`cursor-pointer p-2 rounded ${
                      activeVideoId === video.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    } hover:bg-gray-200`}
                    onClick={() => handleVideoChange(video)}
                  >
                    {video.title}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <section className="w-full md:w-3/4 md:ml-4">
            <div className="bg-white p-4 shadow rounded mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {videoTitle}
              </h2>
              <div className="mb-4 h-full">
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src={videoUrl}
                    title="Course Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">
                  More from the Lesson:
                </h3>
                <ul className="list-decimal ml-4 mt-2">
                  {actionItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="text-primary">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-600 text-sm">
                  <strong>Income Disclaimer:</strong> Our course material is
                  provided for educational purposes only...
                </p>
              </div>
              <div className="flex justify-between mt-4">
                {activeVideoId > 1 && (
                  <button
                    className="px-4 py-2 bg-[#eee] text-gray-500 rounded-3xl hover:bg-primary-dark transition-transform duration-300 hover:translate-y-[-3px]"
                    onClick={handlePreviousLesson}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Previous Lesson
                  </button>
                )}
                <button
                  className="px-4 py-2 bg-primary text-white rounded-3xl hover:bg-primary-dark transition-transform duration-300 hover:translate-y-[-3px]"
                  onClick={handleNextLesson}
                >
                  Next Lesson
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default VideoPage;
