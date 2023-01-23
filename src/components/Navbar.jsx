import React from 'react'

const Navbar = ({ page, setPage }) => {
    return (
        <div>
            <p onClick={() => setPage('home')}>
                home
            </p>
            <p onClick={() => setPage('contact')}>
                contact
            </p>
            <p onClick={() => setPage('portfolio')}>
                portfolio
            </p>
        </div >
    )
}

export default Navbar