// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Recipe Sharing Application</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
          </nav>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <div className="app-container">
                <div className="form-section">
                  <AddRecipeForm />
                </div>
                
                <div className="list-section">
                  <RecipeList />
                </div>
              </div>
            } />
            
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App