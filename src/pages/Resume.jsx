import React from 'react'

const Resume = () => {
    return (

        <div className="container my-3 py-3" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
            <div style={{ display: "flex", justifyContent: "space-between", width: '15em' }}>
                <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />

                <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
            </div>


            <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: 'column', height: '25em' }}>
                    <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                    <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </div>

                <div className='imageContainer'>
                    <a href="https://docs.google.com/document/d/1dkkZ2JOBx--CuWsuis0NWvJXpENTEEb-qLa2GhX7nxA/edit?usp=sharing">
                        <img id="resume-image" src='/images/resume.jpg' alt="Steven Krenn resume" />
                    </a>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: '.5em' }}>
                        <a className='btn btn-primary' href="./pdf/krennResume.pdf" download="krennResume">CLICK HERE TO DOWNLOAD RESUME</a>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: 'column', height: '25em' }}>
                    <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

                    <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                </div>
            </div>


            <div style={{ display: "flex", justifyContent: "space-between", width: '15em' }}>
                <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                <img height='100' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </div>
        </div >
    )
}

export default Resume

// src={resume}

// style={{ display: "flex", justifyContent: "center" }}