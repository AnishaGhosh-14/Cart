import React, { Children } from 'react'
import  ReactDOM  from 'react-dom';
import { 
  useNavigate ,
} from 'react-router-dom';
import './Modal.css'
import ReactConfetti from 'react-confetti';
export default function Modal(props ) {
  const navigate = useNavigate(); // 
    const home=()=>{
      navigate('/');
        window.location.reload();
      
    }

  return ReactDOM.createPortal (
    <>
     <div className='modal-wrapper'> </div> 
    <div className='modal-container'>
        <ReactConfetti width='450%' height='200%'/>
       <h1>Thank you for shopping with us!!🖤</h1>
       <h4>You are an amazing person. </h4>
       <button onClick={home}>OK</button>
    </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  )
}


