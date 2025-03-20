// src/components/AddRecipeForm.jsx
import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    // Validate form
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    // Add recipe with unique ID
    addRecipe({ 
      id: Date.now(), 
      title, 
      description 
    })
    
    // Reset form
    setTitle('')
    setDescription('')
  }

  return (
    <div className="recipe-form-container">
      <h2>Add New Recipe</h2>
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
        
        <button type="submit" className="submit-btn">Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm