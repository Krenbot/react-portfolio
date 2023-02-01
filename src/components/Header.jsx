import React from 'react'

const Header = ({ page, setPage }) => {
    return (
        <header classname="display-flex align-items-center">

            <a href="index.html">
                <h1><span>Steven</span>Krenn</h1>
            </a>

            <nav>
                <p onClick={() => setPage('home')}>About Me</p>
                <p onClick={() => setPage('portfolio')}>Portfolio</p>
                <p onClick={() => setPage('resume')}>Resume</p>
                <p onClick={() => setPage('contact')}>Contact</p>
            </nav>

        </header>

        // <div>
        //     <p onClick={() => setPage('home')}>
        //         home
        //     </p>
        //     <p onClick={() => setPage('contact')}>
        //         contact
        //     </p>
        //     <p onClick={() => setPage('portfolio')}>
        //         portfolio
        //     </p>
        //     <p onClick={() => setPage('resume')}>
        //         resume
        //     </p>
        // </div >
    )
}

export default Header