import React from 'react'
import Project from '../components/Project'

const projects = [
    {
        title: 'Book || Nook',
        description: 'Literature-based social bookshelf app',
        githubUrl: 'https://github.com/Krenbot/book-nook',
        liveUrl: 'https://book-nook.herokuapp.com/',
        alt: 'Book Nook Image',
        techs: 'MySql, Sequelize, express, Handlebars, express-session, bcrypt, anime.js',
        image: './images/bookNook-min.png'
    },
    {
        title: 'Body of Cards',
        description: 'Exercises and corresponding cards are pulled from APIs and randomized for user workouts.',
        githubUrl: 'https://github.com/Krenbot/body-of-cards',
        liveUrl: 'https://krenbot.github.io/body-of-cards/',
        image: './images/bodyOfCards-min.png',
        alt: 'Body of Cards Image',
        techs: 'Bulma, Deck of Cards API, Exercise API, Google Fonts'
    },
    {
        title: 'Tech Blog',
        description: 'Tech blog project featuring Handlebars',
        githubUrl: 'https://github.com/Krenbot/tech-blog',
        liveUrl: 'https://shrouded-scrubland-56368.herokuapp.com/',
        image: './images/techBlog-min.jpg',
        alt: 'Tech Blog Image',
        techs: 'node.js, MySql, dotenv, Sequelize, Postman, Handlebars'
    },
    {
        title: 'Workday Scheduler',
        description: 'Project featuring a local storage based scheduler',
        githubUrl: 'https://github.com/Krenbot/workday-scheduler',
        liveUrl: 'https://krenbot.github.io/workday-scheduler/',
        image: './images/workdayScheduler-min.jpg',
        alt: 'alt text',
        techs: 'HTML, CSS, JavaScript, jQuery, moment.js'
    },
    {
        title: 'Weather Dashboard',
        description: 'Pulls weather data from API and displays to user',
        githubUrl: 'https://github.com/Krenbot/weather-dashboard',
        liveUrl: 'https://krenbot.github.io/weather-dashboard/',
        image: './images/weatherDashboard-min.png',
        alt: 'alt text',
        techs: 'HTML, CSS, JavaScript, moment.js'
    },
    {
        title: 'GitHub Repo Search',
        description: 'React project allowing users to search GitHub repos by keyword',
        githubUrl: 'https://github.com/Krenbot/github-repo-search',
        liveUrl: 'https://krenbot.github.io/github-repo-search/',
        image: './images/repoSearch.jpg',
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