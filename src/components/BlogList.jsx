import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
  {
    "image": "https://picsum.photos/id/1011/300/200",
    "title": "Understanding React Components",
    "description": "Learn the basics of React components, the building blocks of any React application."
  },
  {
    "image": "https://picsum.photos/id/1027/300/200",
    "title": "Getting Started with JSX",
    "description": "An introduction to JSX, the syntax extension for JavaScript used in React."
  },
  {
    "image": "https://picsum.photos/id/1035/300/200",
    "title": "State and Props in React",
    "description": "Explore the differences between state and props in React and how to use them effectively."
  },
  {
    "image": "https://picsum.photos/id/1049/300/200",
    "title": "Handling Events in React",
    "description": "A guide to handling user interactions in React using event handlers."
  },
  {
    "image": "https://picsum.photos/id/1055/300/200",
    "title": "Understanding React Hooks",
    "description": "Get to know React hooks and how they simplify state management in functional components."
  },
  {
    "image": "https://picsum.photos/id/1062/300/200",
    "title": "Styling in React: Tips and Tricks",
    "description": "Learn different ways to style your React components, including CSS modules and inline styles."
  },
  {
    "image": "https://picsum.photos/id/1069/300/200",
    "title": "Optimizing React Performance",
    "description": "Tips and best practices to make your React applications faster and more efficient."
  },
  {
    "image": "https://picsum.photos/id/1074/300/200",
    "title": "React Router Basics",
    "description": "Understand the fundamentals of React Router for managing navigation in your apps."
  }
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8">
      {blogData.map((blog, index) => (
        <BlogCard 
          key={index} 
          image={blog.image} 
          title={blog.title} 
          description={blog.description} 
        />
      ))}
    </div>
  );
};

export default BlogList;
