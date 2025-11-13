import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore((state) => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  if (!recipes || !favorites) return <div>Loading...</div>; // safety fallback

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((r) => r.id === id)
  ).filter(Boolean); // remove undefined

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
