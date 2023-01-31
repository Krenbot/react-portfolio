import React from 'react'

const Project = ({ project }) => {
    const { title, description, githubUrl, liveUrl, image } = project
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className='flex'>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div >
    )
}

export default Project