import { useState, useEffect } from "react";
import recipesData from "../data.json"; // import mock data
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the mock data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden border">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-bold">{recipe.title}</h2>
                      <p className="text-gray-600">{recipe.summary}</p>
                    </div>
                  </div>
                </Link>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
