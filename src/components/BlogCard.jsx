import React from 'react';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col justify-between">
      <img className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105 md:h-48 lg:h-56" src={image} alt={title} />
      
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
