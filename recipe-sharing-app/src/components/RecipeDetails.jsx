import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  
  // Get the recipe from the store
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === parseInt(recipeId) || recipe.id === recipeId)
  );

  // Handle case where recipe isn't found
  if (!recipe) {
    return (
      <div className="recipe-details not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="back-link">Back to Recipes</Link>
      </div>
    );
  }

  // Handle delete with navigation
  const handleDeleteSuccess = () => {
    navigate('/');
  };

  return (
    <div className="recipe-details">
      <Link to="/" className="back-link">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <h2>{recipe.title}</h2>
        <div className="recipe-actions">
          <Link to={`/edit/${recipe.id}`} className="edit-button">
            Edit Recipe
          </Link>
          <DeleteRecipeButton 
            recipeId={recipe.id} 
            onDeleteSuccess={handleDeleteSuccess} 
          />
        </div>
      </div>
      
      <div className="recipe-content">
        <h3>Description</h3>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;