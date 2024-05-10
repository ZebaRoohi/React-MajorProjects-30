import React, { useState } from "react";
import { add, remove } from "../features/cartSlice";
import {useDispatch,useSelector } from 'react-redux'

const Card = ({ product }) => {
  const [addedToCart,setAddedToCart] = useState(false)
  const dispatch = useDispatch()
  const handleAddToCart = (item)=>{
        dispatch(add(item))
        setAddedToCart(true)
  }

  const handleDeleteCartItem = (itemId)=>{
    dispatch(remove(itemId))
    setAddedToCart(false)
  }
const {cart} = useSelector((state)=>state)
  const isThereInCart  = (itemId)=>{
    return cart.find(cartItem=>cartItem.id==itemId)
  }
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product?.description?.slice(0,20)+" more..."}</p>
        <p className="card-price">${product.price}</p>
       {
        isThereInCart(product.id)? <button onClick={()=>handleDeleteCartItem(product.id)} className="card-button">remove item</button>
        : <button onClick={()=>handleAddToCart({...product,quantity:1})} className="card-button">Add to Cart</button>
       }
      </div>
    </div>
  );
};

export default Card;
