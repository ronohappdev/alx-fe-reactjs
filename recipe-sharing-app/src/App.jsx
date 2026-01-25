// src/App.jsx
import { useState } from 'react';
import { RecipeStoreProvider } from './store/recipeStore';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const AppContent = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="app-container">
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">🍳 Recipe Sharing App</h1>
          <p className="app-subtitle">Discover, share, and save your favorite recipes</p>
        </header>

        <div className="tab-container">
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-button ${activeTab === 'all' ? 'active' : 'inactive'}`}
          >
            All Recipes
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`tab-button ${activeTab === 'favorites' ? 'active' : 'inactive'}`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`tab-button ${activeTab === 'recommendations' ? 'active' : 'inactive'}`}
          >
            Recommendations
          </button>
        </div>

        <div className="search-add-container">
          <div className="search-wrapper">
            <SearchBar />
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-success btn-nowrap"
          >
            {showAddForm ? 'Cancel' : '+ Add Recipe'}
          </button>
        </div>

        {showAddForm && (
          <div className="form-container">
            <h2 className="form-title">Add New Recipe</h2>
            <AddRecipeForm onClose={() => setShowAddForm(false)} />
          </div>
        )}

        <div className="space-y-6">
          {activeTab === 'all' && <RecipeList onView={setSelectedRecipe} />}
          {activeTab === 'favorites' && <FavoritesList onView={setSelectedRecipe} />}
          {activeTab === 'recommendations' && <RecommendationsList onView={setSelectedRecipe} />}
        </div>

        {selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <RecipeStoreProvider>
      <AppContent />
    </RecipeStoreProvider>
  );
};

export default App;