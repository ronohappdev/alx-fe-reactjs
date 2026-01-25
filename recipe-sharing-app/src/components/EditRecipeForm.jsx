import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Get the recipe from the store
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === parseInt(recipeId) || r.id === recipeId)
  );

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Initialize form with recipe data
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    } else {
      setError('Recipe not found');
    }
  }, [recipe]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate form input
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required');
      return;
    }
    
    // Update the recipe
    updateRecipe({ 
      ...recipe,
      title, 
      description 
    });
    
    // Navigate back to recipe details
    navigate(`/recipe/${recipeId}`);
  };

  // Handle recipe not found
  if (error === 'Recipe not found') {
    return (
      <div className="edit-recipe-form not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're trying to edit doesn't exist or has been removed.</p>
        <Link to="/" className="back-link">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="edit-recipe-form">
      <Link to={`/recipe/${recipeId}`} className="back-link">← Back to Recipe</Link>
      <h2>Edit Recipe</h2>
      
      {error && error !== 'Recipe not found' && (
        <div className="error-message">{error}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-button">Save Changes</button>
          <Link to={`/recipe/${recipeId}`} className="cancel-button">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;