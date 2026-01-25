// src/store/recipeStore.js
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useRecipeStore = create(
  immer((set, get) => ({
    recipes: [],
    favorites: [],        // array of recipe IDs
    searchTerm: '',

    addRecipe: (newRecipe) =>
      set((state) => {
        state.recipes.push({
          ...newRecipe,
          id: Date.now(),
        });
      }),

    updateRecipe: (updated) =>
      set((state) => {
        const index = state.recipes.findIndex((r) => r.id === updated.id);
        if (index !== -1) state.recipes[index] = updated;
      }),

    deleteRecipe: (id) =>
      set((state) => {
        state.recipes = state.recipes.filter((r) => r.id !== id);
        state.favorites = state.favorites.filter((fid) => fid !== id);
      }),

    toggleFavorite: (id) =>
      set((state) => {
        if (state.favorites.includes(id)) {
          state.favorites = state.favorites.filter((fid) => fid !== id);
        } else {
          state.favorites.push(id);
        }
      }),

    setSearchTerm: (term) => set({ searchTerm: term }),

    // Computed selectors (call as functions)
    filteredRecipes: () => {
      const { recipes, searchTerm } = get();
      if (!searchTerm.trim()) return recipes;
      const lowerTerm = searchTerm.toLowerCase();
      return recipes.filter((r) =>
        r.title.toLowerCase().includes(lowerTerm)
      );
    },

    favoriteRecipes: () => {
      const { recipes, favorites } = get();
      return recipes.filter((r) => favorites.includes(r.id));
    },
  }))
);