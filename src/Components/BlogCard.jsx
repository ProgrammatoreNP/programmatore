import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{blog.date}</span>
          <a href={blog.link} className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
