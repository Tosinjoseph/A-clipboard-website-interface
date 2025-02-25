import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer flexCenter'>
     <img src="./logo.svg" alt="" />
     <ul>
        <li> FAQs</li>
        <li> Contact Us</li>
        <li> Privacy Policy</li>
        <li> Press Kit</li>
        <li>Install Guide</li>
     </ul>
     <div className="footer-logos">
        <img src="icon-facebook.svg" alt="" />
        <img src="icon-instagram.svg" alt="" />
        <img src="icon-twitter.svg" alt="" />
     </div>
    </div>
  )
}

export default Footer