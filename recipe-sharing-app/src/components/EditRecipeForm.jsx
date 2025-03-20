// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipeId = parseInt(id)
  
  const recipes = useRecipeStore(state => state.recipes)
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  // Find recipe and set form values
  useEffect(() => {
    const recipeToEdit = recipes.find(recipe => recipe.id === recipeId)
    
    if (recipeToEdit) {
      setTitle(recipeToEdit.title)
      setDescription(recipeToEdit.description)
    } else {
      // Redirect if recipe not found
      navigate('/')
    }
  }, [recipeId, recipes, navigate])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // Validate form
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    // Update recipe
    updateRecipe(recipeId, { title, description })
    
    // Navigate back to details page
    navigate(`/recipe/${recipeId}`)
  }
  
  const handleCancel = () => {
    navigate(`/recipe/${recipeId}`)
  }
  
  return (
    <div className="recipe-form-container">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            rows="4"
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="submit-btn">Update Recipe</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditRecipeForm