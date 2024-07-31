import React from "react";

function GuideCard({ title, description }) {
  return (
    // <div className="bg-white text-purple-500 p-4 md:p-5 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg text-purple-500 p-4 md:p-5 rounded-2xl hover:shadow-lg transform transition-transform duration-500 hover:translate-y-[-3px]">
      <h2 className="font-bold text-white">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
}

export default GuideCard;
