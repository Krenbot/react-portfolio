import React from 'react'
import Project from '../components/Project'

const projects = [
    {
        title: 'Test Project 1',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg'
    },
    {
        title: 'Test Project 2',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg'
    },
    {
        title: 'Test Project 3',
        description: 'test test test',
        githubUrl: 'github.com/test',
        liveUrl: 'github.com/test',
        image: 'test.jpg'
    }
]

const Portfolio = () => {
    return (
        <div>
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
    )
}

export default Portfolio