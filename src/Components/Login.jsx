import React from "react";
import GoogleLogo from "../assets/google.png";
import FacebookLogo from "../assets/facebook.png";
import Logo from "../assets/logo.png";
import GuideCard from "./GuideCard";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Navigate } from "react";


function Login() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
    const handleButtonClick = () => {
      // Update localStorage with the current value of the input
      localStorage.setItem("Email", value);
      localStorage.setItem("Password", password);
      // Redirect to the dashboard page
      console.log(localStorage)
      return window.location.href = '/home';
    };

  const guides = [
    { title: "For Awesome Coders", description: "Download our Guide" },
    { title: "For Responsible Learners", description: "Download our Guide" },
    { title: "For Caring Developers", description: "Download our Guide" },
    { title: "For Others", description: "Download our Guide" },
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row min-h-screen">
        {/* Right Side (Login Form) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10 order-1 md:order-2">
          <div className="mb-4">
            <h1 font-bold text-lg md:text-2xl lg:text-3xl>
              Register to begin an amazing journey!
            </h1>
          </div>
          <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Sign in to your account
                </label>
                <input
                  id="email"
                  type="email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="someone@example.com"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        ${
          value
            ? /\S+@\S+\.\S+/.test(value)
              ? "bg-green-100 border-green-500"
              : isFocused
              ? "bg-red-100 border-red-500"
              : "bg-white border-gray-300"
            : "bg-white border-gray-300"
        }
        focus:outline-none focus:bg-blue-50 focus:border-blue-500 transition-colors duration-300`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
          ${
            password
              ? password.length >= 8
                ? "bg-green-100 border-green-500"
                : "bg-red-100 border-red-500"
              : "bg-white border-gray-300"
          }
          focus:outline-none focus:bg-blue-50 focus:border-blue-500 transition-colors duration-300`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                />
                <p className="text-right">
                  <a href="#" className="text-blue-500">
                    Sign Up?
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full w-full transform transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline"
                  type="button" 
                  onClick={handleButtonClick}
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mb-4">OR</div>
            <button className="w-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md rounded-2xl py-2 px-4 mb-2 text-gray-700 flex items-center justify-center transform transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline">
              <img src={GoogleLogo} alt="Google Icon" className="w-6 mr-2" />
              Sign in with Google
            </button>
            <button className="w-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md rounded-2xl py-2 px-4 mb-2 text-gray-700 flex items-center justify-center transform transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline">
              <img
                src={FacebookLogo}
                alt="Facebook Icon"
                className="w-6 mr-2"
              />
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-login-custom text-white p-6 md:p-10 order-2 md:order-1">
          <div className="flex justify-center mb-6 md:mb-10">
            <img src={Logo} alt="Logo" className="w-20 md:w-40" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-5 md:mb-5">
            Achieve excellence in coding with Programmatore
          </h1>
          <p className="mb-4 md:mb-5">
            Programmatore is an online platform for beginners to learn coding
            and build their skills. On Programmatore, you can learn through
            interactive tutorials, take quizzes and get feedback on your
            progress, create custom projects, access coding resources, and track
            your development from any device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map((guide, index) => (
              <GuideCard
                key={index}
                title={guide.title}
                description={guide.description}
              />
            ))}
          </div>
        </div>
        <div className="h-8 md:h-12 lg:h-16"></div>
      </div>
    </>
  );
}

export default Login;
