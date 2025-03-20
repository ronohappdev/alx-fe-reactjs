import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  // Get addRecipe action from the Zustand store
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  // Local state for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    
    // Validate form input
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required');
      return;
    }
    
    // Add recipe to store with unique ID
    addRecipe({ 
      id: Date.now(), 
      title, 
      description 
    });
    
    // Show success message
    setSuccess(true);
    
    // Clear form fields
    setTitle('');
    setDescription('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Recipe added successfully!</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
          />
        </div>
        
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;