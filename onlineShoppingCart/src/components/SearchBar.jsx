import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    handleSearch(text);
  };

  return (
    <input
      type="text"
      className="search-bar" // Apply the CSS class
      placeholder="Search products..."
      value={searchText}
      onChange={handleChange}
      aria-label="Search products"
    />
  );
};

export default SearchBar;
