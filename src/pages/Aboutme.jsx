import React from 'react'

const Aboutme = () => {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' alt='Steven Krenn headshot' src='./images/self.jpg' />
            <div id='aboutMe'>
                <h2>Full Stack Web Developer</h2>
                <p>
                    Personable and passionate Full-Stack Developer with a background in construction and project management with Full Stack Certificate from the University of Wisconsin - Madison. I have honed my skills in Node.js, Express, Handlebars, SQL, JavaScript, CSS, HTML, and React to develop meaningful user-focused applications. I very much enjoy engaging and working with a team while solving problems in a collaborative environments. An articulate and engaging individual who enjoys connecting with co-workers and is passionate about building applications that assist everyday people to make their lives easier. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.<br />
                    <br />
                    Coming from a hospital construction background, I am used to adapting and overcoming challenges quickly and efficiently. My passion for problem solving and project completion has translated well into coding. I love learning new technologies and frameworks and look forward to advancing my career as a web developer!
                </p>
            </div>
        </div>
    )
}

export default Aboutme