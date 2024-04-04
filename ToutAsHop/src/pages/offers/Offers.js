import React from 'react'
import './Offers.css'
import ex_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
  <div>
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you MA NIIGA</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className='offers-right'>
        <img src={ex_image} alt=''/>
      </div>
    </div>
    <div className='newletter'>
      <div>    
        <h1 className='newletter-h1'>Get Exclusive Offers On Your Email</h1>
        <p className='newletter-p'>Subscribe to our newletter and stay updated</p>
      </div>
      <div>
      <input className='newletter-email' type='email' placeholder='Your Email id'/>
      <button className='newletter-btn'>Subscribe</button>
      </div>
  </div> 
  </div>
  )
}

export default Offers
