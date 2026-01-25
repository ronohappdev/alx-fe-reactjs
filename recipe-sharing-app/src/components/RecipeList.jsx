import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '.recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  // Get filtered recipes from the Zustand store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // Display a message if there are no recipes
  if (filteredRecipes.length === 0) {
    return (
      <div className="recipe-list empty-list">
        {searchTerm ? (
          <p>No recipes match your search. Try a different term or add a new recipe!</p>
        ) : (
          <p>No recipes yet. Add your first recipe!</p>
        )}
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <h2>Recipes {searchTerm && `matching "${searchTerm}"`}</h2>
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p className="recipe-description">{recipe.description.substring(0, 100)}
              {recipe.description.length > 100 ? '...' : ''}
            </p>
            <div className="recipe-actions">
              <Link to={`/recipe/${recipe.id}`} className="view-button">
                View Details
              </Link>
              <Link to={`/edit/${recipe.id}`} className="edit-button">
                Edit
              </Link>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;