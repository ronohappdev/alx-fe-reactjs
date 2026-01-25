// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],           // all recipes
  favorites: [],         // user's favorite recipe IDs
  recommendations: [],   // recommended recipes

  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])] // avoid duplicates
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Mock recommendation generator
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(recipe =>
      !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  }
}));