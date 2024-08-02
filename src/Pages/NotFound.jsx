import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
      <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
      <a
        href="/"
        className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-3xl hover:bg-indigo-600 transition-transform duration-500 hover:translate-y-[-5px]"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound