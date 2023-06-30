import React, { Children } from 'react'
import  ReactDOM  from 'react-dom';
import './Modal.css'
import ReactConfetti from 'react-confetti';
export default function Modal(props ) {
    const home=()=>{
        window.location.reload();
    }

  return ReactDOM.createPortal (
    <>
     <div className='modal-wrapper'> </div> 
    <div className='modal-container'>
        <ReactConfetti width='410%' height='250%'/>
       <h1>Thank you for shopping with us!!🥳🎊</h1>
       <h4>You are an amazing person. </h4>
       <button onClick={home}>OK</button>
       <p className='p'>www.anisha.com</p>
    </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  )
}


