import React, { useState } from "react";
import BlogCard from "../Components/BlogCard";
import blogsData from "../Data/BlogData";

function App() {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogsData.slice(0, visibleBlogs).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      {visibleBlogs < Math.min(9, blogsData.length) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreBlogs}
            className="bg-white border border-gray-400 text-gray-800 py-2 px-4 rounded hover:bg-gray-200"
          >
            View All Blogs
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
