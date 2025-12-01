import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import "./index.css"; // <-- import Tailwind CSS

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '15px' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/add">Add Recipe</Link> |{' '}
        <Link to="/favorites">Favorites</Link> |{' '}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <SearchBar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
  );
}

export default App;
