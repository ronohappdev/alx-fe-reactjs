// src/App.jsx
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Sharing Application</h1>
      </header>
      
      <main className="app-main">
        <div className="app-container">
          <div className="form-section">
            <AddRecipeForm />
          </div>
          
          <div className="list-section">
            <RecipeList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App