import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

import Recipe from './Receipe';

const ReceipeSearch = () => {
  const APP_ID = 'd24fc829';
  const APP_KEY = 'd8f410679a1f51ff1f571843f297273b';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]); // Trigger search whenever query changes

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setQuery(e.target.value); // Update query to trigger search
  };

  const clearSearch = () => {
    setSearch('');
    setQuery(''); // Reset query to default value
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search by name"
        />
        <button className="search-button" onClick={clearSearch}>Clear</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default ReceipeSearch;
