// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate()
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  
  const handleDelete = () => {
    // Confirm before deleting
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this recipe? This action cannot be undone.'
    )
    
    if (confirmDelete) {
      deleteRecipe(id)
      navigate('/')
    }
  }
  
  return (
    <button 
      className="delete-button" 
      onClick={handleDelete}
    >
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton