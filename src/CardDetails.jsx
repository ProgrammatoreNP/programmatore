import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  // Replace with actual data fetching logic as needed
  const card = cards.find((card) => card.id === parseInt(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.description}</p>
            <div className="mt-4">
              {card.level > 0 ? (
                <div className="flex items-center">
                  <span className="mr-2">Unlock at Level {card.level}</span>
                  <span className="text-gray-400">0%</span>
                </div>
              ) : (
                <span className="text-gray-400">0%</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Skool Masterclass (LITE)",
    description:
      "Learn how to create and sell online courses with Skool. Monetize your passion or skill!",
    image: "/path-to-image-1.jpg",
    level: 0,
  },
  {
    id: 2,
    title: "Skool Masterclass (hello)",
    description:
      "Learn how to create and sell online courses with Skool. Monetize your passion or skill!",
    image: "/path-to-image-1.jpg",
    level: 0,
  },
  // Other cards...
];

export default CardDetails;
