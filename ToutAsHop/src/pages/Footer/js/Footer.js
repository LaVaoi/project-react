import React from 'react'
import '../css/Footer.css'
import footer_logo from '../image/logo_big.png'
import instagram_icon from '../image/instagram_icon.png'
import pintester_icon from '../image/pintester_icon.png'
import whatsapp_icon from '../image/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo}/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
