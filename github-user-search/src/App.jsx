import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        GitHub User Search
      </h1>
      <p className="text-center mb-4">
        Welcome to the GitHub User Search Application!
      </p>
      <Search />
    </div>
  );
}

export default App;
