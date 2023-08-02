import React from 'react';

function Cards({project}) {
    let background = project.src;
    var sectionStyle = {
        backgroundImage: `${background}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
      
    return (
        <div className='justify-content-center workblock' style={{backgroundImage: `url(${background})`,  backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <div className="d-flex flex-column align-middle text-center justify-center" id={project.title} alt={project.title} >
                <div className='d-flex flex-column align-middle text-center justify-center' id="workcard">
                    <h3>{project.title}</h3>
                    <a href={project.app} >
                    <p>Project Link</p></a>
                    <a href={project.git}>
                    <p>GitHub ReposatoryLink</p></a>
                </div>
            </div>
        </div>
    )
}

export default Cards;