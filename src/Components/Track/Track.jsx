import './Track.css'
import React from 'react'

const Track = () => {
  return (
    <div className='track'>
        <div className="header flexColCenter container">
            <h1 className='textCenter'> Keep track of your snippets</h1>
            <p className="secondaryText textCenter">Clipboard instantly stores any item you copy in the cloud, 
  meaning you can access your snippets immediately on all your 
  devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>
        <div className="image-menu">
            <img src="./image-computer.png" alt="" />
            <div className="right">
                <div className="top">
                <h2>Quick Search</h2>
                <p className='secondaryText'>Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
                <div className="top">
                <h2>iCloud Sync</h2>
                <p className='secondaryText'>Instantly saves and syncs snippets across all your devices.</p>
                </div>
                <div className="top">
                <h2>Complete History</h2>
                <p className='secondaryText'>Retrieve any snippets from the first moment you started using the app.</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Track
