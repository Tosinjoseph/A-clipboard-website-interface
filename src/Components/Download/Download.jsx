import './Download.css'
import React from 'react'

const Download = () => {
  return (
    <div className='download container flexColCenter textCenter'>
     <h1> Clipboard for iOS and Mac OS</h1>
     <p className="secondaryText"> Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.
</p>
<div className="buttons flexCenter">
    <button type='submit' className='button'> Download for iOS</button>
    <button type='submit' className='button2'>Download for Mac</button>
</div>
    </div>
  )
}

export default Download