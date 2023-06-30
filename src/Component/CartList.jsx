import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './CartList.css'

export default function CartList({ cart }) {
  const [cartNew, setCartNew] = useState([]);
  const [createModal,setModal]=useState(false);

  useEffect(() => {
    setCartNew(cart);
  }, [cart]);

  const calculateTotalPrice = () => {
    const totalPrice = cartNew
      .map((item) => {
        const parsedPrice = parseFloat(item.price);
        const parsedQuantity = parseFloat(item.quantity);
        return parsedPrice * parsedQuantity; 
      })
      .reduce((total, value) => total + value, 0);

    return totalPrice;
  };

  const increase = (itemIndex) => {
    const updatedCart = cartNew.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          quantity: item.quantity + 1,
        //    price: item.price * (item.quantity + 1), 
        };
      }
      return item;
    });
  
    setCartNew(updatedCart);
  };
  const removeItem = (itemIndex) => {
    console.log('Before removeItem:', cartNew);
   
    const updatedCart = cartNew.filter((item, index) => index !== itemIndex);
    console.log(itemIndex)
    setCartNew(updatedCart);
    console.log(updatedCart)
  };

  const decrease = (itemIndex) => {
    const updatedCart = cartNew.map((item, index) => {
      if (index === itemIndex && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
         
       
        //   price:item.price
        //   price: item.price * (item.quantity - 1), // Update the price value
        };
        
      }
      else if (item.quantity === 0) {
        removeItem(itemIndex);
         
      }
     return item;
    });
  
    setCartNew(updatedCart);
  };
  


  const modal=()=>{
  setModal(true)
  }

  return (
    <div className='whole1'>
      {cartNew.map((item, itemIndex) => {
        return (
          <div  className='single1' key={itemIndex}>
            <img  className='img1'src={item.image} alt="final bag" width={40} />
            <span className='title1'>{item.title}</span>
            {/* <div className='change'> */}
            <button className='btnd' onClick={() => decrease(itemIndex)}>-</button>
            <span className='quantity'>{item.quantity}</span>
            <button className='btni' onClick={() => increase(itemIndex)}>+</button>
            <span className='price1'>{item.price*item.quantity}</span>
            <button className='remove' onClick={() => removeItem(itemIndex)}>Remove</button>
            {/* </div> */}
        </div>
        );
      })}
      <p>Total Price: {calculateTotalPrice()}</p>
      <button onClick={modal} >buy now</button>
      {createModal&& <Modal/>}
    </div>
  );
}
