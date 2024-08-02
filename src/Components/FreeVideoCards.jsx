import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming Nav is in the same directory

const cards = [
  {
    id: "/videopage",
    title: "HTML free crash course",
    description:
      "Learn how to create and sell online courses with Skool. Monetize your passion or skill!",
    image:
      "https://i.pinimg.com/736x/f9/3e/1b/f93e1bf65a906060855a5184e6fe734f.jpg",
    level: 0,
  },
  {
    id: 2,
    title: "CSS free crash course",
    description:
      "Learn how to start, run & grow your own marketing agency in 90 days or less!",
    image:
      "https://i.pinimg.com/736x/f9/3e/1b/f93e1bf65a906060855a5184e6fe734f.jpg",
    level: 0,
  },
  {
    id: 3,
    title: "JavaScript free crash course",
    description:
      "Get all of the podcast episodes from successful Skool creators.",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*yv91Y6QOQLgeuqX1",
    level: 0,
  },
  {
    id: 4,
    title: "Secret Gift ($997 Value)",
    description: "Reach level 5 and get a secret gift worth $997!",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*yv91Y6QOQLgeuqX1",
    level: 5,
  },
  {
    id: 5,
    title: "Free 1-1 VIP Coaching Call",
    description:
      "Reach level 6 and get a 1-1 VIP coaching call with Max & the Skool Specialists.",
    image:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp",
    level: 6,
  },
  {
    id: 6,
    title: "Inner Circle Mastermind",
    description:
      "Reach level 7 and access a secret monthly mastermind call with Max.",
    image:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp",
    level: 7,
  },
];

const Card = ({ id, title, description, image, level }) => (
  <Link
    to={id} // Directly use id as the link target
    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg  transition-transform duration-500 hover:translate-y-[-10px]"
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
            onClick={() => navigate(-1)}
            className="bg-primary text-white py-2 px-4 rounded-3xl mb-4  transition-transform duration-500 hover:translate-y-[-5px]"
          >
            Go Back
          </button>
          <h1 className="text-3xl font-bold mb-6">Available Free Courses</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
