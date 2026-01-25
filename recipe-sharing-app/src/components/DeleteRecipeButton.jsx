import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div className="delete-confirm">
        <button onClick={handleDelete} className="confirm-button">
          Confirm
        </button>
        <button onClick={() => setShowConfirm(false)} className="cancel-button">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => setShowConfirm(true)} 
      className="delete-button"
      aria-label="Delete recipe"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;