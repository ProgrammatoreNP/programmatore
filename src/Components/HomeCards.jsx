// src/HomeCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import CardLink from "./CardLink";
import { useAuth0 } from "@auth0/auth0-react";
import ServerUpdates from "../Components/ServerUpdates";
import ServerUpdatesGuest from "../Components/ServerUpdatesGuest";
import Footer from "./Footer";


const HomeCards = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {isAuthenticated ? (
        <>
          <h1 className="text-xl font-semibold mb-6">
            Welcome{" "}
            <span className="font-bold text-2xl bg-login-custom bg-clip-text text-transparent capitalize">
              {user.nickname}
            </span>
            , what would you like to do today?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <CardLink
              to="/free-courses"
              bgColor="bg-blue-100"
              hoverColor="bg-blue-200"
              textColor="text-blue-700"
              title="Learn Free Courses"
            >
              Click here to explore the free courses and start your free
              learning journey.
            </CardLink>
            <CardLink
              to="/book-class"
              bgColor="bg-yellow-100"
              hoverColor="bg-yellow-200"
              textColor="text-yellow-700"
              title="Book a Class"
            >
              Click here to schedule your classes with us and choose a time that
              works best for you
            </CardLink>
            <CardLink
              to="/paid-courses"
              bgColor="bg-red-100"
              hoverColor="bg-red-200"
              textColor="text-red-700"
              title="Purchase Paid Courses"
            >
              Click here to browse and purchase our premium courses for an
              in-depth learning experience
            </CardLink>
            <CardLink
              to="/services"
              bgColor="bg-green-100"
              hoverColor="bg-green-200"
              textColor="text-green-700"
              title="Our Services"
            >
              Click here to discover the various services we offer to help you
              achieve your learning goals
            </CardLink>
          </div>
          <ServerUpdates />
          <Footer />
        </>
      ) : (
        <>
          <ServerUpdatesGuest />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeCards;
