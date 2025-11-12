import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Whenever searchTerm changes, update filtered recipes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
    />
  );
};

export default SearchBar;
