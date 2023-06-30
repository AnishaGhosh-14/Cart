import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

export default function  ({count,setShowCart})
{
  const setCart=()=>{
    setShowCart(true)
  }
  return (
    <div className='flex'>
      <div><img src={logo} alt="" width={30} /></div>
      <div onClick={setCart}> <img src={cart} width={30} alt="" style={{cursor:'pointer'}}/>
        <sup>
            {count}
        </sup>
      </div>
    </div>
  )
}

