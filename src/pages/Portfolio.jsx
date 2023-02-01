import React from 'react'
import Project from '../components/Project'

const projects = [
    {
        title: 'Book || Nook',
        description: 'test test test1',
        githubUrl: 'https://github.com/Krenbot/book-nook',
        liveUrl: 'https://book-nook.herokuapp.com/',
        alt: 'Book Nook Image',
        techs: 'MySql, Sequelize, express, Handlebars, express-session, bcrypt, anime.js',
        image: '/images/bookNook-min.png'
    },
    {
        title: 'Body of Cards',
        description: 'test test test2',
        githubUrl: 'https://github.com/Krenbot/body-of-cards',
        liveUrl: 'https://krenbot.github.io/body-of-cards/',
        image: '/images/bodyOfCards-min.png',
        alt: 'Body of Cards Image',
        techs: 'Bulma, Deck of Cards API, Exercise API, Google Fonts'
    },
    {
        title: 'Tech Blog',
        description: 'test test test3',
        githubUrl: 'https://github.com/Krenbot/tech-blog',
        liveUrl: 'https://shrouded-scrubland-56368.herokuapp.com/',
        image: '/images/techBlog-min.jpg',
        alt: 'Tech Blog Image',
        techs: 'node.js, MySql, dotenv, Sequelize, Postman'
    },
    {
        title: 'Workday Scheduler',
        description: 'test test test4',
        githubUrl: 'https://github.com/Krenbot/workday-scheduler',
        liveUrl: 'https://krenbot.github.io/workday-scheduler/',
        image: '/images/workdayScheduler-min.jpg',
        alt: 'alt text',
        techs: 'HTML, CSS< JavaScript, jQuery, moment.js'
    },
    {
        title: 'Weather Dashboard',
        description: 'test test test5',
        githubUrl: 'https://github.com/Krenbot/weather-dashboard',
        liveUrl: 'https://krenbot.github.io/weather-dashboard/',
        image: '/images/weatherDashboard-min.png',
        alt: 'alt text',
        techs: 'HTML, CSS, JavaScript, moment.js'
    },
    {
        title: 'GitHub Repo Search',
        description: 'test test test6',
        githubUrl: 'https://github.com/Krenbot/github-repo-search',
        liveUrl: 'https://krenbot.github.io/github-repo-search/',
        image: '/images/repoSearch.jpg',
        alt: 'alt text',
        techs: 'React, ESLint, Axios'
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
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        techs={p.techs}
                        githubUrl={p.githubUrl}
                        liveUrl={p.liveUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio