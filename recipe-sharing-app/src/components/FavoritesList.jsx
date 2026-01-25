// src/components/FavoritesList.jsx

import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from './DeleteRecipeButton';

const FavoriteCard = ({ recipe, onView }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <h3 className="recipe-title">{recipe.title}</h3>
        <button
          onClick={handleFavoriteToggle}
          className="favorite-button"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <p className="recipe-description">{recipe.description}</p>
      {recipe.prepTime > 0 && (
        <p className="recipe-prep-time">⏱️ {recipe.prepTime} minutes</p>
      )}
      <div className="recipe-actions">
        <button
          onClick={() => onView(recipe)}
          className="btn btn-primary btn-small"
        >
          View Details
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

const FavoritesList = ({ onView }) => {
  const { favorites, recipes } = useRecipeStore();
  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);

  return (
    <div className="section-container section-gray">
      <h2 className="section-title">My Favorites ❤️</h2>
      {favoriteRecipes.length === 0 ? (
        <p className="section-empty">No favorite recipes yet. Start adding some!</p>
      ) : (
        <div className="recipe-grid">
          {favoriteRecipes.map((recipe) => (
            <FavoriteCard key={recipe.id} recipe={recipe} onView={onView} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;