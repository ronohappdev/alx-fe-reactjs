import { create } from 'zustand';

// Create the enhanced recipe store using Zustand
export const useRecipeStore = create((set, get) => ({
  // State
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Basic Recipe Actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe]
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ 
    recipes,
    filteredRecipes: recipes 
  }),
  
  // Search and Filter Actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.searchTerm
      ? state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : state.recipes
  }))
}));