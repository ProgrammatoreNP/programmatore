import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border-t border-gray-300 py-4">
      <div className="container mx-auto text-center mt-6">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Programmatore. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-blue-500 hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-500 hover:underline mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
