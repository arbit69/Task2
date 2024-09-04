import React from 'react';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Cards</h1>
      <BlogList />
    </div>
  );
}

export default App;
