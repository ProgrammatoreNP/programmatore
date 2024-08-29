import React from "react";
import LoginButton from "./LoginButton"
import { Link } from "react-router-dom";

const ServerUpdatesGuest = () => {
  const hasUpdates = true; // Change this to a dynamic value based on your logic
  const update = {
    title: "Please login to continue using our site",
    description:
      "We recommend logging in to Programmatore for better use. You may proceed to using the website features once you log in.",
  };
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="border-b border-gray-200 pb-2 mb-4 flex space-x-8">
        <button className="text-gray-900 font-medium">Server Board</button>
      </div>
      {hasUpdates ? (
        <Link to="/login">
          <div className="bg-gray-50 p-4 rounded-lg shadow transition-transform duration-500 hover:translate-y-[-5px] cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800">
              {update.title}
            </h3>
            <p className="text-gray-600 mt-2">{update.description}</p>
            <p className="text-gray-500 text-sm mt-2">
              Posted on {currentDate}
            </p>
          </div>
        </Link>
      ) : (
        <div className="text-gray-500 flex items-center space-x-2">
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14H17V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8H4a2 2 0 00-2 2v2h13v-2z"
              />
            </svg>
          </div>
          <p>Currently, there isn't any new updates from the server!</p>
        </div>
      )}
    </div>
  );
};

export default ServerUpdatesGuest;

