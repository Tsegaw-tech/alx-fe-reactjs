import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from "./recipeStore";
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
      <FavoriteButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
