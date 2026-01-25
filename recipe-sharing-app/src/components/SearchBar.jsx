// src/components/SearchBar.jsx
import { useRecipeStore } from "../store/recipeStore";

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      className="input-field"
    />
  );
};

export default SearchBar;