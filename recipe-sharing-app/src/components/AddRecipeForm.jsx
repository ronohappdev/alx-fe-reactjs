// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = ({ onClose }) => {
  const { addRecipe } = useRecipeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = () => {
    if (title && description) {
      addRecipe({ title, description, prepTime: parseInt(prepTime) || 0 });
      setTitle('');
      setDescription('');
      setPrepTime('');
      if (onClose) onClose();
    }
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
          className="btn btn-primary"
        >
          Add Recipe
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default AddRecipeForm;