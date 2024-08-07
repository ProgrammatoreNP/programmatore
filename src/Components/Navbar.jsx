import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginButton from "./LoginButton";
import "./Css/Navbar.css"

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
          <a href="#" className="text-blue-600">
            ✨Premium
          </a>
          <LoginButton />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-3 pt-3 pb-3 space-y-1 sm:px-3">
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
