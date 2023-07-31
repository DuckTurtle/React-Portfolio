import React from 'react';
import mePhoto from "../images/me.jpg"

function About() {
    return (
        <div className='container'>
        <div className='row'>
            <h2>About Me</h2>
        </div>
        <div className='row'>
            <div className='col d-flex justify-content-center'>
                <img className="rounded-circle justify-content-center" src={mePhoto} alt="My Face" style={{ width: "120px", height: "120px" }} />
            </div>
            <div>
                <p>
                    Hi, My name is Quinton Schnell. I grew up in DeForest WI, and went to school there. I attended college through the University of Wisconsin's Extended campus.  I enjoy bowling,
                    disc golf, and the occasional book. I am passionate about technology and doing things with my hands like welding, woodworking, and also 3D Printing.<br></br>
                    I have been working since I was 15 and have experience leading a team in a workspace. I'm quick to learn new things, I always put my best foot forward, and I don't 
                    like leaving tasks unfinished. I am skilled in Javascript, Nodejs, MySQL, MongoDB, ReactJS, JQuery, and Problem-Solving. <br></br>
                     I always try to be kind and respectful to others but, I stand firmly by treating others how you want to be treated and will go out of my way to help those who are kind back.
                </p>
            </div>

        </div>
    </div>
    )
}

export default About;