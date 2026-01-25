// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from './DeleteRecipeButton';

const RecommendationCard = ({ recipe, onView }) => {
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

const RecommendationsList = ({ onView }) => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="section-container section-blue">
      <div className="section-header">
        <h2 className="section-title">Recommended for You ✨</h2>
        <button
          onClick={generateRecommendations}
          className="btn btn-primary btn-small"
        >
          Refresh
        </button>
      </div>
      {recommendations.length === 0 ? (
        <p className="section-empty">No recommendations available. Add more favorites!</p>
      ) : (
        <div className="recipe-grid">
          {recommendations.map((recipe) => (
            <RecommendationCard key={recipe.id} recipe={recipe} onView={onView} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;