import React, { useRef, useState } from "react";
import "./Css/CustomVideoPlayer.css"; // Import your custom styles here

const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className="video-player relative w-full max-w-2xl mx-auto">
      <video ref={videoRef} className="w-full" src={src} autoPlay />
      <div className="controls absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 p-4 flex items-center justify-between">
        <button onClick={togglePlayPause} className="text-white">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="1"
          onChange={handleVolumeChange}
          className="w-1/4"
        />
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
