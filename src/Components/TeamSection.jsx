import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold">Meet The Team</h2>
        <h3 className="text-2xl font-semibold mt-2">Our Professionals</h3>
        <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis delectus dolorem possimus, dolor rerum.
          </p>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">
            READ MORE
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-around mt-8 md:mt-0">
        <div className="flex flex-col items-center p-4">
          <div className="relative">
            <img
              src="/path/to/jeffrey-brown.jpg"
              alt="Jeffrey Brown"
              className="w-32 h-32 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />
          </div>
          <h4 className="mt-4 text-xl font-semibold">JEFFREY BROWN</h4>
          <p className="text-gray-600">Creative Leader</p>
        </div>
        <div className="flex flex-col items-center p-4 mt-8 md:mt-0">
          <div className="relative">
            <img
              src="/path/to/ann-richmond.jpg"
              alt="Ann Richmond"
              className="w-32 h-32 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />
          </div>
          <h4 className="mt-4 text-xl font-semibold">ANN RICHMOND</h4>
          <p className="text-gray-600">Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
