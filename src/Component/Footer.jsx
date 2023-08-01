import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <p className='para__'>&copy; {new Date().getFullYear()} Anisha Ghosh</p>
    </div>
  );
}