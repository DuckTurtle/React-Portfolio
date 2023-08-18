import React from 'react';
import Cards from "./pcards"

function Portfolio() {
    const projects = [
        {
            title: 'CharaCraft',
            src: './images/characraft.jpg',
            git: 'https://github.com/DuckTurtle/CharaCraft',
            app: 'https://characraft-27a6d9fbde68.herokuapp.com/',
        },
        {
            title: 'TreeFinder',
            src: './images/treefinder.jpg',
            git: 'https://github.com/DuckTurtle/Full-Throttle--TreeFinder-The-Park-Finder-App',
            app: ' https://duckturtle.github.io/Full-Throttle--TreeFinder-The-Park-Finder-App/',
        },
        {
            title: 'Email Regex Gist',
            src: './images/EmailRegex.png',
            git: 'https://gist.github.com/DuckTurtle/782773f1485ed0642c5af82d45ace7ff',
            app: 'https://gist.github.com/DuckTurtle/782773f1485ed0642c5af82d45ace7ff',
        },
        {
            title: 'ReadME Generator',
            src: './images/readme.jpg',
            git: 'https://github.com/DuckTurtle/UW-BootCamo-Week9-README-generator.',
            app: 'https://youtu.be/NS6VeFsQp70',
        },
        {
            title: 'Soical NetWork API',
            src: './images/sna.png',
            git: 'https://github.com/DuckTurtle/Social-Networking-Api',
            app: 'https://youtu.be/EmjVoF3kt2c',
        },
        {
            title: 'GamersGuild',
            src: './images/gamerGuild.png',
            git: 'https://github.com/jayson-baker/Gamers_Guild',
            app: 'https://gamers-guild-024e835506e9.herokuapp.com/',
        },
       
    ]
    return (
        <div className='d-'>
            {projects.map((project) => (
                <Cards project={project} key={Math.random(1,1000)} ></Cards>
            ))};
        </div>
    )
}

export default Portfolio;