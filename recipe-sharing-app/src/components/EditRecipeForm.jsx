// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from "../store/recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [prepTime, setPrepTime] = useState(recipe.prepTime || '');

  const handleSubmit = () => {
    updateRecipe({ ...recipe, title, description, prepTime: parseInt(prepTime) || 0 });
    onClose();
  };

  return (
    <div className="space-y-4">
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          rows="3"
          className="textarea-field"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          placeholder="Prep Time (minutes)"
          className="input-field"
        />
      </div>
      <div className="form-actions">
        <button
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Update Recipe
        </button>
        <button
          onClick={onClose}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditRecipeForm;