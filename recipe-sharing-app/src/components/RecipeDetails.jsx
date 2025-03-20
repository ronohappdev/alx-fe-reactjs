// src/components/RecipeDetails.jsx
import { useNavigate, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Convert string id from URL params to number
  const recipeId = parseInt(id)
  
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  )
  
  // Handle if recipe not found
  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          Back to Recipes
        </button>
      </div>
    )
  }
  
  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <h2>{recipe.title}</h2>
        <div className="recipe-actions">
          <button 
            className="edit-button" 
            onClick={() => navigate(`/edit/${recipe.id}`)}
          >
            Edit Recipe
          </button>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      </div>
      
      <div className="recipe-content">
        <div className="recipe-section">
          <h3>Description</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
      
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
      >
        Back to All Recipes
      </button>
    </div>
  )
}

export default RecipeDetails