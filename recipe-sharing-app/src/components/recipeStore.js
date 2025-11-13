import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // ✅ CRUD actions
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
      recommendations: state.recommendations.filter((rec) => rec.id !== id),
    })),

  // ✅ Search and filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients?.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.prepTime?.toString().includes(state.searchTerm)
      ),
    })),

  // ✅ Favorites management
  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return state;
      return { favorites: [...state.favorites, recipeId] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ✅ Recommendation logic (mock example)
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favoriteRecipes.some(
          (fav) =>
            r.category === fav.category || // same category
            r.ingredients?.split(',').some((ing) =>
              fav.ingredients?.includes(ing.trim())
            )
        )
    );

    set({ recommendations: recommended.slice(0, 5) }); // Limit to 5
  },
}));
