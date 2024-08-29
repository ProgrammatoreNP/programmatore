import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCopy,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CourseDataHTML from "../Data/CourseDataHTML";
import CourseCSSData from "../Data/CourseCSSData";
import CourseDataJS from "../Data/CourseDataJS";
import Footer from "../Components/Footer"

// Helper function to extract code and HTML content
const splitHtmlAndCode = (content) => {
  const codeMatch = content.match(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/);
  const htmlMatch = content.replace(
    /<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/,
    ""
  );
  return {
    htmlContent: htmlMatch.trim(),
    code: codeMatch ? codeMatch[1] : "",
  };
};

// Helper function to decode HTML entities
const decodeHtmlEntities = (text) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const TextPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courseContent, setCourseContent] = useState([]);
  const [activeLesson, setActiveLesson] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLessonId = parseInt(
      localStorage.getItem(`activeLesson_${id}`),
      10
    );
    setActiveLesson(savedLessonId || 0);

    let courseData;
    switch (id) {
      case "html":
        courseData = CourseDataHTML.html;
        break;
      case "css":
        courseData = CourseCSSData;
        break;
      case "js":
        courseData = CourseDataJS;
        break;
      default:
        courseData = [];
    }
    setCourseContent(courseData);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`activeLesson_${id}`, activeLesson);
    Prism.highlightAll(); // Trigger syntax highlighting
  }, [activeLesson, id, courseContent]);

  const handlePrevLesson = () => {
    if (activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
    }
  };

  const handleNextLesson = () => {
    if (activeLesson < courseContent.length - 1) {
      setActiveLesson(activeLesson + 1);
    }
  };

  const copyCodeToClipboard = (code) => {
    const decodedCode = decodeHtmlEntities(code);
    navigator.clipboard.writeText(decodedCode);
    alert("Code copied to clipboard!");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (!Array.isArray(courseContent)) {
    console.error("Course content is not an array:", courseContent);
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <p>Error loading course content.</p>
        </div>
      </>
    );
  }

  const {
    title = "",
    htmlContent = "",
    code = "",
    actionItems = [],
  } = splitHtmlAndCode(courseContent[activeLesson]?.content || "");

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
                {courseContent.map((lesson, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-2 rounded ${
                      activeLesson === index
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    } hover:bg-gray-200`}
                    onClick={() => setActiveLesson(index)}
                  >
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <section className="w-full md:w-3/4 md:ml-4">
            <div className="bg-white p-4 shadow rounded mb-4 relative">
              <div className="flex items-center mb-4">
                <button
                  onClick={() => navigate("/free-courses")}
                  className="border border-[#a855f7] px-4 py-2 rounded-3xl bg-primary text-white transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Return Back
                </button>
                <h2 className="text-2xl font-bold text-gray-700 ml-4">
                  {title}
                </h2>
              </div>
              <button
                onClick={() => copyCodeToClipboard(code)}
                className="absolute top-2 right-2 border border-[#a855f7] px-4 py-2 rounded-3xl bg-primary text-white transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline"
              >
                <FontAwesomeIcon icon={faCopy} /> Copy
              </button>
              <div className="prose max-w-none mb-4">
                {/* Render HTML content */}
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>
              <div className="prose max-w-none">
                {/* Render code content */}
                <pre>
                  <code
                    className={`language-${id}`}
                    dangerouslySetInnerHTML={{ __html: code }}
                  />
                </pre>
              </div>
              <div className="mt-4">
                {actionItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 underline my-2"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handlePrevLesson}
                  disabled={activeLesson === 0}
                  className={`px-4 py-2 ${
                    activeLesson === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-[#eee] cursor-pointer"
                  } text-gray-500 rounded-3xl hover:bg-primary-dark transition-transform duration-300 hover:translate-y-[-3px]`}
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Previous
                </button>
                <button
                  onClick={handleNextLesson}
                  disabled={activeLesson === courseContent.length - 1}
                  className={`border border-[#a855f7] px-4 py-2 rounded-3xl bg-primary text-white transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline ${
                    activeLesson === courseContent.length - 1
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TextPage;
