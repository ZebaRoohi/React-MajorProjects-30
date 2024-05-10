
import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decreaseQuantity, increseQuantity, remove } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
 const navigate =  useNavigate()
 const products = useSelector((state)=>state.cart)
 const dipatch = useDispatch()
 console.log(products,'this is cart')
 const totalPriceOfCart = products.reduce((acc,val)=>{
  return acc+val.price*val.quantity
 },0)

 console.log(totalPriceOfCart,'this is cart value')

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <button onClick={()=>navigate('/')}>Go Back</button>
      <div className="product-list">
        {products&&products.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="product-details">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>Price: ${product.price*product.quantity}</p>
              </div>
            </div>
            <button onClick={()=>dipatch(remove(product.id))} className="remove-button">
              Remove
            </button>
            <button onClick={()=>dipatch(decreaseQuantity({id:product.id}))}>-</button>
            <p>{product.quantity}</p>
            <button onClick={()=>dipatch(increseQuantity({id:product.id}))}>+</button>
          </div>
        ))}
      </div>
      <h1>Total:${totalPriceOfCart}</h1>
    </div>
  );
};

export default Cart;
