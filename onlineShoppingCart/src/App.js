import "./styles.css";

import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
export default function App() {
  const [products, setProducts] = useState([]);
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="App">
     
      <Routes>
           <Route path="/" element={<CardList products={products} />}/>
           <Route path="/cart" element={<Cart/>}/>
             

      </Routes>
    </div>
  );
}
