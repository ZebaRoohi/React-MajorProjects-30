import React from "react";

const SortDropdown = ({ handleSort }) => {
  const options = [
    "All Categories",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics"
  ];

  return (
    <select onChange={(e) => handleSort(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
