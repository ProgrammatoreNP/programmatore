import React, { useState, useEffect } from "react";

const IframeWithQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      // Example time to trigger quiz (could be dynamic or based on some conditions)
      // const quizTime = 10 * 1000; // Time in milliseconds
      const quizTime = 15 * 1000; // Time in milliseconds

      if (iframeLoaded) {
        setTimeout(() => {
          setShowQuiz(true);
        }, quizTime);
      }
    };

    checkTime();
  }, [iframeLoaded]);

  const handleQuizSubmit = () => {
    setShowQuiz(false);
  };

  return (
    <div className="relative">
      <iframe
        src="https://www.youtube.com/embed/PBcqGxrr9g8?si=EPfXFYAY2YtTCOk_" // URL of the iframe content
        className="w-full h-[600px] border-0"
        onLoad={() => setIframeLoaded(true)}
        title="Interactive Content"
      ></iframe>

      {showQuiz && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Quiz Time!</h2>
            <p className="mb-4">Here's a question for you: What is 2 + 2?</p>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 mb-4 w-full"
              placeholder="Type your answer here"
            />
            <button
              onClick={handleQuizSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IframeWithQuiz;
