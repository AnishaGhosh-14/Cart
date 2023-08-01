

import React from 'react';
import bag1 from '../assets/model_ban.png';
import './Banner.css';
import sideBag from '../assets/banner_bag.png'

export default function Banner() {
  return (
    <div className="banner-container">
     
      <div className="image-container">
        <img src={bag1} alt="" className="image"  width='40%'/>
      </div>
      <div className="text-container">
        <div className='head'>
        <h2 className="text">PIOR BAG</h2>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nihil velit tempore aliquid ut sunt assumenda aspernatur suscipit dolor id.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta molestias sed dolore quam, at, officiis dolores voluptatem neque veritatis, alias a! Similique est nam possimus libero ipsam accusaum, vitae impedit quis laborum!<br/>
        </p>
        <p> S h o p  N o w ➡️</p>
        </div>
        <div className='second'>
        <div className='text-container2'>
            <h5 className='text2'>FASHION OWN WAY</h5>
            <p className='para2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sapiente debitis fugiat, tempora quia eos non mollitia voluptatibus consectetur illum? Dolorem totam vel repudiandae ex, cupiditate illum doloremque dolores a?</p>
        </div>
        <div className='text-container3'>
            <img  className='text3' src={sideBag} alt="" width='50%%'/>
            <p className='para3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a libero temporibus hic! Atque nemo, tenetur d!</p>
        </div>
        </div>
      </div>
    </div>
  );
}
