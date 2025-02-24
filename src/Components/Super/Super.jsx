import './Super.css'
import React from 'react'

const Super = () => {
  return (
    <div className='super'>
     <div className="head flexColCenter">
        <h1>Spercharge your workflow</h1>
        <p className='secondaryText textCenter'>We’ve got the tools to boost your productivity. </p>
     </div>
     <div className="logo-menu container">
        <div className="menu flexColCenter">
            <img src="icon-blacklist.svg" alt="" />
            <h2>Create Blacklist</h2>
            <p className="textCenter secondaryText">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>
        <div className="menu flexColCenter">
            <img src="icon-text.svg" alt="" />
            <h2>Plane Text Snippet</h2>
            <p className="textCenter secondaryText"> Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        <div className="menu flexColCenter">
            <img src="icon-preview.svg" alt="" />
            <h2>Sneak Preview</h2>
            <p className="textCenter secondaryText">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
     </div>
    </div>
  )
}

export default Super