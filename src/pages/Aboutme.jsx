import React from 'react'

const Aboutme = () => {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' alt='steven krenn headshot' src='/images/self.jpg' />
            <div id='aboutMe'>
                <h2>Full Stack Web Developer</h2>
                <p>Description</p>
            </div>
        </div>
    )
}

export default Aboutme