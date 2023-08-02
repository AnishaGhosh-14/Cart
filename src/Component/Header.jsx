import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

export default function  ({count,setShowCart})
{
  const setCart=()=>{
    setShowCart(true)
  }
  const back=()=>{
    console.log("hii")
    setShowCart(false)
  }
  return (
    <div className='flex'>
      <div><img onClick={back} src={logo} alt="" width={30} /></div>
      <div onClick={setCart}> <img src={cart} width={30} alt="" style={{cursor:'pointer'}}/>
        <sup>
            {count}
        </sup>
      </div>
    </div>
  )
}

