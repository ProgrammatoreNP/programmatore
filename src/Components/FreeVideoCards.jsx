import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming Nav is in the same directory
import cards from "../Data/CardData"; // Import the card data
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ id, title, description, image, level }) => (
  <Link
    to={`/free-courses/${id}`} // Directly use id as the link target
    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-500 hover:translate-y-[-10px]"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        {level > 0 ? (
          <div className="flex items-center">
            <span className="mr-2">Unlock at Level {level}</span>
            <span className="text-gray-400">0%</span>
          </div>
        ) : (
          <span className="text-gray-400">0%</span>
        )}
      </div>
    </div>
  </Link>
);

const CardsDisplay = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-40">
          <button
            onClick={() => navigate("/home")}
            className="bg-primary text-white py-2 px-4 rounded-3xl mb-4 transition-transform duration-500 hover:translate-y-[-5px]"
          >
           Return Home
          </button>
          <h1 className="text-3xl font-bold mb-6">Available Free Courses</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsDisplay;
