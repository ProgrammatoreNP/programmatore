import React, { useState, useEffect } from "react";
import TextPage from "../TextPage/TextPages";
import VideoPageHTML from "../Pages/VideoPageHTML";

const validCredentials = [
  { email: "info@bandhanpokhrel.com.np", passcode: "Bandhan" },
  { email: "user2@example.com", passcode: "riyam" },
  { email: "user3@example.com", passcode: "code3" },
  // Add more email-passcode pairs as needed
];
const PremiumPage = () => {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passcodeValid, setPasscodeValid] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(false);
  };

  const handlePasscodeChange = (e) => {
    setPasscode(e.target.value);
    setPasscodeValid(false);
  };

  const handleLogin = () => {
    const user = validCredentials.find(
      (cred) => cred.email === email && cred.passcode === passcode
    );
    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      setErrorMessage("Invalid email or passcode");
      setEmailValid(!email);
      setPasscodeValid(!passcode);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className={`${
        isAuthenticated
          ? "bg-white"
          : "min-h-screen flex items-center justify-center bg-gray-100"
      }`}
    >
      {isAuthenticated ? (
        <>
          <VideoPageHTML />
          {/* <div className="p-6 bg-white rounded shadow w-full max-w-lg">
            Secured Content
          </div> */}
        </>
      ) : (
        <div className="p-6 bg-white rounded shadow w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Enter Email and Passcode</h1>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            className={`mt-2 p-2 border rounded w-full ${
              emailValid ? "border-green-500" : "border-red-500"
            }`}
            placeholder="Enter your email"
          />
          <input
            type="password"
            value={passcode}
            onChange={handlePasscodeChange}
            onKeyPress={handleKeyPress}
            className={`mt-4 p-2 border rounded w-full ${
              passcodeValid ? "border-green-500" : "border-red-500"
            }`}
            placeholder="Enter your passcode"
          />
          <button
            onClick={handleLogin}
            className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default PremiumPage;
