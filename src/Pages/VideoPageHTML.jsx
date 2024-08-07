import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const VideoPageHTML = () => {
  const videos = [
    {
      id: 1,
      title: "1. Introduction to coding concept",
      url: "https://www.youtube.com/embed/3w5r1xHnumc",
      actionItems: [
        { text: "Newsletter for important updates", link: "/" },
        { text: "Follow for exclusive content", link: "/" },
        { text: "Leave a testimonial", link: "/" },
        { text: "Reach your income goals faster & easier", link: "/" },
      ],
    },
    {
      id: 2,
      title: "2. All you need to know about HTML",
      url: "https://www.youtube.com/embed/3pUAyhVJfQI",
      actionItems: [
        { text: "Join the HTML webinar", link: "https://example.com/webinar" },
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
    // Add other video objects similarly with different actionItems
    // ...
  ];

  // Load the initial state from localStorage
  const savedVideoId = parseInt(localStorage.getItem("activeVideoId"), 10);
  const initialVideo =
    videos.find((video) => video.id === savedVideoId) || videos[0];

  const [videoUrl, setVideoUrl] = useState(initialVideo.url);
  const [activeVideoId, setActiveVideoId] = useState(initialVideo.id);
  const [videoTitle, setVideoTitle] = useState(initialVideo.title);
  const [actionItems, setActionItems] = useState(initialVideo.actionItems);

  // Update localStorage whenever activeVideoId changes
  useEffect(() => {
    localStorage.setItem("activeVideoId", activeVideoId);
  }, [activeVideoId]);

  const handleVideoChange = (id, url, title, items) => {
    setVideoUrl(url);
    setActiveVideoId(id);
    setVideoTitle(title);
    setActionItems(items);
  };

  const handleNextLesson = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === activeVideoId
    );
    const nextIndex = (currentIndex + 1) % videos.length;
    const nextVideo = videos[nextIndex];

    handleVideoChange(
      nextVideo.id,
      nextVideo.url,
      nextVideo.title,
      nextVideo.actionItems
    );
  };

  const handlePreviousLesson = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === activeVideoId
    );
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    const prevVideo = videos[prevIndex];

    handleVideoChange(
      prevVideo.id,
      prevVideo.url,
      prevVideo.title,
      prevVideo.actionItems
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 bg-white p-4 shadow rounded mb-4 md:mb-0">
            <nav>
              <h2 className="font-semibold text-gray-700 mb-4">
                Free HTML Course
              </h2>
              <ul className="space-y-2 p-2">
                {videos.map((video) => (
                  <li
                    key={video.id}
                    className={`cursor-pointer p-2 rounded ${
                      activeVideoId === video.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    } hover:bg-gray-200`}
                    onClick={() =>
                      handleVideoChange(
                        video.id,
                        video.url,
                        video.title,
                        video.actionItems
                      )
                    }
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
                  style={{
                    paddingBottom: "56.25%" /* 16:9 aspect ratio */,
                    height: 0,
                  }}
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
                    className="px-4 py-2 bg-[#eee] text-gray-500 rounded-3xl hover:bg-primary-dark transition-transform duration-300 hover:translate-y-[-3px] "
                    onClick={handlePreviousLesson}
                  >
                    {"< "}Previous Lesson
                  </button>
                )}
                <button
                  className="px-4 py-2 bg-primary text-white rounded-3xl hover:bg-primary-dark transition-transform duration-300 hover:translate-y-[-3px] "
                  onClick={handleNextLesson}
                >
                  Next Lesson {">"}
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default VideoPageHTML;
