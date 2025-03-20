// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)

  return (
    <div className="recipe-list">
      <h2>My Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe!</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p className="recipe-description">
                {recipe.description.length > 100
                  ? `${recipe.description.substring(0, 100)}...`
                  : recipe.description}
              </p>
              <div className="recipe-card-actions">
                <Link 
                  to={`/recipe/${recipe.id}`} 
                  className="view-details-link"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecipeList