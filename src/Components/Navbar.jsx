import React, { useState } from "react";
import LoginButton from "./LoginButton";
import "./Css/Navbar.css";
import "./ComponentsCSS/Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-bold">
            <a href="/home">Programmatore</a>
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/home" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="/free-courses" className="text-gray-600 hover:text-gray-800">
            Video
          </a>
          <a href="/free-courses" className="text-gray-600 hover:text-gray-800">
            NonVideo
          </a>
          <a href="/docs" className="text-gray-600 hover:text-gray-800">
            Docs
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/premium" className="text-blue-600">
            ✨Premium
          </a>
          <LoginButton />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span className="block bg-gray-600 h-1 w-6 mb-1 transition-all duration-300"></span>
              <span className="block bg-gray-600 h-1 w-6 mb-1 transition-all duration-300"></span>
              <span className="block bg-gray-600 h-1 w-6 transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center px-3 pt-3 pb-3 space-y-4">
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            Tutorials
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            Exercises
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="block text-blue-600 mt-3">
            Plus
          </a>
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
