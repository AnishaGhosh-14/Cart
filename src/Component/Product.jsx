// import React from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import './Product.css'

// export default function Product({ product, addToCart, setCart }) {

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   return (
   
//     <div className='whole' style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {product.map((item, index) => (
//         <div  className='single' key={index} style={{ width: '30%', display: 'flex', flexDirection: 'row' }}>
//           <div>
//             <img className='img' src={item.image} alt="Bag Image" width="70%" />
//             <p className='title_bag'>{item.title} {item.color}</p>
//             <div className='color'></div>
//             <p className='price'>Rs {item.price}/-</p>
//             <button className='btn_bag' onClick={() => handleAddToCart(item)}>Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
   
//   );
// }

import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Product.css';

export default function Product({ product, addToCart, setCart }) {
  const handleAddToCart = (item) => {
    addToCart(item);
    item.disabled = true;
  };

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
              {item.disabled ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

