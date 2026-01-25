import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './recipeStore';
import './App.css';


function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  
  // Initialize with some sample recipes when the app loads
  useEffect(() => {
    const sampleRecipes = [
      { 
        id: 1, 
        title: 'Spaghetti Carbonara', 
        description: 'Classic Italian pasta dish with eggs, cheese, bacon, and black pepper. The hot pasta is tossed with a mixture of eggs, cheese, and pancetta, creating a creamy sauce without using heavy cream.' 
      },
      { 
        id: 2, 
        title: 'Chicken Stir Fry', 
        description: 'Quick and healthy stir-fried chicken with vegetables and soy sauce. A versatile dish that can be customized with your favorite vegetables and served over rice or noodles for a complete meal.' 
      },
      {
        id: 3,
        title: 'Homemade Pizza',
        description: 'Delicious homemade pizza with a crispy crust and your choice of toppings. This recipe includes instructions for making the perfect pizza dough from scratch and suggestions for classic topping combinations.'
      }
    ];
    
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Recipe Sharing App</h1>
        </header>
        
        <Routes>
          <Route path="/" element={
            <main>
              <div className="search-container">
                <SearchBar />
              </div>
              <div className="container">
                <AddRecipeForm />
                <RecipeList />
              </div>
            </main>
          } />
          
          <Route path="/recipe/:recipeId" element={
            <main>
              <RecipeDetails />
            </main>
          } />
          
          <Route path="/edit/:recipeId" element={
            <main>
              <EditRecipeForm />
            </main>
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;