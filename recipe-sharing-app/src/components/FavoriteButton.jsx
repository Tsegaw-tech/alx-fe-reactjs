import React from 'react';
import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isFavorite ? '#f87171' : '#a7f3d0',
        color: 'black',
        padding: '8px 12px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
