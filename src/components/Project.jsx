import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Project = ({ project }) => {
    const { title, description, githubUrl, liveUrl, techs, image } = project
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <p className="card-techs">{techs}</p>
                <div class='projectLinks'>
                    <a href={githubUrl} className="btn"><BsGithub />Project Repo</a>
                    <a href={liveUrl} className="btn">Project Link</a>
                </div>
            </div>
        </div >
    )
}

export default Project