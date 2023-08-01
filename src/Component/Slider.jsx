import React from 'react'
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'
import pic7 from '../assets/7.jpg'
import './Slider.css'

export default function Slider() {
  return (
    <>
    <div className='slider'>
      <span style={{'--i': 1}}><img src={pic1} alt="" /></span>
<span style={{'--i': 2}}><img src={pic2} alt="" /> <a href=""></a></span>
<span style={{'--i': 3}}><a href="https://ae.hm.com/en/buy-crochet-look-shopper-cream-patterned.html"><img src={pic3} alt="" /></a></span>
<span style={{'--i': 4}}><a href="https://ae.hm.com/en/buy-jacquard-weave-shopper-white-patterned.html"><img src={pic4} alt="" /></a></span>
<span style={{'--i': 5}}><a href="https://ae.hm.com/en/buy-flannel-shopper-grey-checked.html"><img src={pic5} alt="" /></a></span>
<span style={{'--i': 6}}><a href="https://ae.hm.com/en/buy-straw-shopper-beige.html"><img src={pic6} alt="" /></a></span>
<span style={{'--i': 7}}><a href="https://ae.hm.com/en/buy-canvas-shopper-green-striped.html"><img src={pic7} alt="" /></a></span>      
    </div>
    <div className='text-1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid soluta quia, nesciunt nobis ex aliquam dolore id magnam expedita. Assumenda dicta blanditiis ipsa incidunt quia nam hic? Hic, eaque.

    </div>
    </>
  )
}
