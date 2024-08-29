import React from "react";
import CustomVideoPlayer from "./CustomVideoPlayer.jsx";

const VideoComponentTest = () => {
  const videoSrc = "../assets/lessonone.mp4"; // Update this path
  return (
    <div className="App p-4">
      <h1 className="text-3xl font-bold mb-4">Custom Video Player</h1>
      <CustomVideoPlayer src={videoSrc} />
    </div>
  );
};

export default VideoComponentTest;
