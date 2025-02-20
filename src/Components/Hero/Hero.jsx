import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero container'>
        <img src="./logo.svg" alt="home" className='flexCenter' />
        <h1 className='flexCenter'>A history of everything you copy</h1>
        <p className='flexCenter secondaryText'>Clipboard allows you to track and organize everything you 
        copy. Instantly access your clipboard on all your devices.</p>
        <div className="flexCenter buttons">
            <button type='submit' className='button'>Download for iOS</button>
            <button type='submit' className='button2'>Download for Mac</button>
        </div>
    </div>
  )
}

export default Hero