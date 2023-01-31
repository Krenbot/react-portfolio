import React from 'react'

const Header = () => {
    return (
        <header className='display-flex align-items-center' >
            <a href="index.html">
                <h1><span>Steven</span>Krenn</h1>
            </a>

            <nav>
                <a href="#about-me">About Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header