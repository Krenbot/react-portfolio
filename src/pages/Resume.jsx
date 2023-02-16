import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
    return (

        <div className="container my-3 py-3">




            <a href="https://docs.google.com/document/d/1dkkZ2JOBx--CuWsuis0NWvJXpENTEEb-qLa2GhX7nxA/edit?usp=sharing">
                <img id="resume-image" src='/images/resume.jpg' alt="Steven Krenn resume" />
            </a>

            <div id="resume-link" className="m-2">
                <a href="https://docs.google.com/document/d/1dkkZ2JOBx--CuWsuis0NWvJXpENTEEb-qLa2GhX7nxA/edit?usp=sharing"><i className="bi bi-link-45deg"></i>Google Drive PDF</a>
            </div>

            <div>
                <a href="./pdf/krennResume.pdf" download="krennResume"><i className="bi bi-cloud-arrow-down-fill"></i></a>
            </div>

            <h6>Technical Skills</h6>

            <FontAwesomeIcon icon="fa-brands fa-square-js" />


            <p>
                Languages
                <i className="fa-brands fa-square-js"></i>
            </p>
            <p>

                Applications - ADD IMAGES

            </p>

            <p>
                Tools - ADD IMAGES
            </p>

        </div>
    )
}

export default Resume

// src={resume}

