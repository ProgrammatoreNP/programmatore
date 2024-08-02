import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="relative" ref={dropdownRef}>
          <img
            src={user.picture}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="border border-[#a855f7] px-4 py-2 rounded-3xl bg-primary text-white transition-transform duration-300 hover:translate-y-[-3px] focus:outline-none focus:shadow-outline"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </>
  );
};

export default LoginButton;
