import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Project = ({ project }) => {
    const { title, description, githubUrl, liveUrl, image } = project
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* <p className="card-text">{techs}</p> */}
                <div className='flex'>
                    <a href={liveUrl} className="btn btn-primary">Deployed Link</a>
                    <a href={githubUrl} className="btn btn-primary"><BsGithub />GitHub Repo</a>
                </div>
            </div>
        </div >
    )
}

export default Project