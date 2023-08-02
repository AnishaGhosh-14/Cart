
import React, { useState } from 'react';
import './Product.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Product({ product, addToCart, setDesp}) {
  const handleAddToCart = (item) => {
    addToCart(item);
    item.disabled = true;
  };
  const clickdesp=(()=>{
  setDesp(false)
  })

  return (
    <>
    <h3 className='collection-heading'>Our Collection</h3>
    <div className='whole' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {product.map((item, index) => (
        <div className='single' key={index} style={{ width: '30%', display: 'flex', flexDirection: 'row' }}>
          <div>
            <img className='img' src={item.image} alt="Bag Image" width="70%" />
            <p className='title_bag'>{item.title} {item.color}</p>
            <div className='color'></div>
            <p className='price'>Rs {item.price}/-</p>
            <button className='btn_bag' onClick={() => handleAddToCart(item)} disabled={item.disabled}>
              {item.disabled ? 'Added to Cart' : 'Buy Now'}

            </button>
          <button className='btn_detail'>  <Link to={`/description/${item.id}`} onClick={clickdesp}>View Details</Link></button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

