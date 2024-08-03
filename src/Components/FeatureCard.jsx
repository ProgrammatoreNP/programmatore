import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <img src={icon} alt="" className="w-12 h-12" />
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
