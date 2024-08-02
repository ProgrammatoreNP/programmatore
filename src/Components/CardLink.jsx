import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ to, bgColor, hoverColor, textColor, title, children }) => {
  return (
    <Link
      to={to}
      className={`${bgColor} p-6 rounded-lg shadow-md hover:${hoverColor} transition-transform duration-500 hover:translate-y-[-5px] focus:outline-none focus:shadow-outline flex flex-col justify-between min-h-[150px]`}
    >
      <div>
        <h2 className={`${textColor} text-xl font-semibold mb-2`}>{title}</h2>
        <p>{children}</p>
      </div>
    </Link>
  );
};

export default CardLink;
