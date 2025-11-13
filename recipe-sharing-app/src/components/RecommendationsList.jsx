import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  // Auto-generate recommendations when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
