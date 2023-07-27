import React from 'react';

function Cards(project) {
    return (
        <div className='justify-content-center' >
            <div className="card workblock">
                <img src={project.src} alt={project.title} />
                <div className='details'>
                    <h3>{project.title}</h3>
                    <a href={project.app}>
                    <p>Project Link</p></a>
                    <a href={project.git}>
                    <p>GitHub ReposatoryLink</p></a>
                </div>
            </div>
        </div>
    )
}

export default Cards;