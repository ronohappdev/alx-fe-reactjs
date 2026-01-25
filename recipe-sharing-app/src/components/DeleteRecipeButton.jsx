// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="btn btn-danger btn-small"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;