import React from 'react'
import Project from '../components/Project'

const projects = [
    {
        title: 'Book || Nook',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg',
        alt: 'alt text'
    },
    {
        title: 'Body of Cards',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg',
        alt: 'alt text'
    },
    {
        title: 'Tech Blog',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg',
        alt: 'alt text'
    },
    {
        title: 'Workday Scheduler',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg',
        alt: 'alt text'
    },
    {
        title: 'Weather Dashboard',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg',
        alt: 'alt text'
    }
]

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='row g-3 gx-2'>
                {projects.map(p => (
                    <Project
                        key={p.title}
                        project={p}
                    // title={p.title}
                    // description={p.description}
                    // githubUrl={p.githubUrl}
                    // liveUrl={p.liveUrl}
                    // image={p.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio