import React from 'react'

const Resume = () => {
    return (
        <div className="container my-3 py-3">

            <a href="https://docs.google.com/document/d/1dkkZ2JOBx--CuWsuis0NWvJXpENTEEb-qLa2GhX7nxA/edit?usp=sharing"><img id="resume-image" src='/images/resume.jpg' alt="Steven Krenn resume" />

            </a>

            <div id="resume-link" className="m-2">
                <a href="https://docs.google.com/document/d/1dkkZ2JOBx--CuWsuis0NWvJXpENTEEb-qLa2GhX7nxA/edit?usp=sharing"><i class="bi bi-link-45deg"></i>Resume Link</a>
            </div>

            <div className="m-2">
                <a href="./pdf/krennResume.pdf" download="krennResume"><i className="bi bi-cloud-arrow-down-fill"></i>DOWNLOAD BUTTON PLACEHOLDER</a>
            </div>




            {/* <h6>Technical Skills</h6>
            <p>
                Languages - ADD IMAGES
            </p>
            <p>
                Applications - ADD IMAGES
            </p>
            <p>
                Tools - ADD IMAGES
            </p> */}

        </div>
    )
}

export default Resume

// src={resume}