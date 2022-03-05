import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/petty-logo-large.jpeg" 
                className="header--image" alt="header"
            />
            <h2 className="header--title">A Petty Meme Generator</h2>
            <h4 className="header--project">Just another crappy meme generator...</h4>
        </header>
    )
}