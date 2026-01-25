import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ add this

const DeleteRecipeButton = ({ recipeId }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleDelete = () => {
    deleteRecipe(recipeId);  // delete the recipe
    setShowConfirm(false);   // hide confirmation
    navigate("/recipes");    // ✅ redirect to recipe list
  };

  if (showConfirm) {
    return (
      <div className="delete-confirm">
        <button onClick={handleDelete} className="confirm-button">
          Confirm
        </button>
        <button 
          onClick={() => setShowConfirm(false)} 
          className="cancel-button"
        >
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