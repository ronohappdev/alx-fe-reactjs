import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-search" 
          onClick={() => setSearchTerm('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;