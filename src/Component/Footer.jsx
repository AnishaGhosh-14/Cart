import React from 'react';
import './Footer.css';
import vector from '../assets/Vector.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import dribble from '../assets/dribble.png'

export default function Footer() {
  return (
    <div className="footer">
      <p className='para__'>&copy; {new Date().getFullYear()} Anisha Ghosh</p>
      <p className='para__2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta voluptate earum illo minima porro fuga at, sint libero enim.</p>
      <img className='logo_' src={github} alt="" />
      <img  className='logo_'src={linkedin} alt="" />
      <img className='logo_' src={vector} alt="" />
      <img className='logo_' src={dribble} alt="" />
    </div>
  );
}