import React from 'react';
import Cards from "./pcards"

function Portfolio() {
    const [projects] = useState([
        {
            title: 'CharaCraft',
            src: require('../images/characraft.JPG'),
            git: 'https://github.com/DuckTurtle/CharaCraft',
            app: 'https://characraft-27a6d9fbde68.herokuapp.com/',
        },
        {
            title: 'TreeFinder',
            src: require('../images/treefinder.JPG'),
            git: 'https://github.com/DuckTurtle/Full-Throttle--TreeFinder-The-Park-Finder-App',
            app: ' https://duckturtle.github.io/Full-Throttle--TreeFinder-The-Park-Finder-App/',
        },
        {
            title: 'Email Regex Gist',
            src: require('../images/Emain-Regex.png'),
            git: 'https://gist.github.com/DuckTurtle/782773f1485ed0642c5af82d45ace7ff',
            app: 'https://gist.github.com/DuckTurtle/782773f1485ed0642c5af82d45ace7ff',
        },
        {
            title: 'ReadME Generator',
            src: require('../images/readme.JPG'),
            git: 'https://github.com/DuckTurtle/UW-BootCamo-Week9-README-generator.',
            app: 'https://youtu.be/NS6VeFsQp70',
        },
        {
            title: 'Soical NetWork API',
            src: require('../images/sna.png'),
            git: 'https://github.com/DuckTurtle/Social-Networking-Api',
            app: 'https://youtu.be/EmjVoF3kt2c',
        },
        {
            title: 'PlaceHolder For Project 3',
            src: require('../images/cautiontape.PNG'),
            git: 'https://github.com/DuckTurtle',
            app: 'https://github.com/DuckTurtle',
        },
       
    ])
    return (
        <div className='container'>
            {projects.map((project) => (
                <Cards project={project} ></Cards>
            ))}
        </div>
    )
}

export default Portfolio;