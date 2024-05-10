import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import SortDropdown from "./SortDropdown";
import PriceSortDropdown from "./PriceSortDropdown";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardList = ({ products }) => {
  const cartItems = useSelector((state)=>state.cart)
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPriceSort, setSelectedPriceSort] = useState("default");
  const navigate = useNavigate()
 
  const handleSearch = (searchText) => {
    const filteredByCategory =
      selectedCategory === "All Categories"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const filtered = filteredByCategory.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (category) => {
    setSelectedCategory(category);
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handlePriceSort = (option) => {
    setSelectedPriceSort(option);
    let sortedProducts = [...filteredProducts];

    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    // Initialize filteredProducts with all products during the initial render
    setFilteredProducts(products);
  }, [products]);
  return (
    <div>
      <div className="utility-container">
        <SearchBar handleSearch={handleSearch} />
        <button style={{backgroundColor:'white',border:'none'}} onClick={()=>navigate('/cart')}><AiOutlineShoppingCart className="cart-icon"/>{cartItems.length?cartItems.length:''}</button>
        
      </div>
      <div className="utility-container">
        <SortDropdown handleSort={handleSort} />
        <PriceSortDropdown handlePriceSort={handlePriceSort} />
      </div>

      <div className="card-list">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
