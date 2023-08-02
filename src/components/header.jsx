import React from 'react';
import Nav from "./nav.jsx"

function Header() {
   

    return (
        <nav className="d-flex row navbar navbar-expand-lg" id='niv'>
            <div className='container-fluid d-flex flex-row align-middle text-center justify-center w-100 h-100 pl-1'>
                <h2 className='navbar-brand d-flex flex-row align-middle text-center justify-center' id='top2'> Quinton Schnell</h2>
                <Nav />
            </div>
        </nav>
    )
}

export default Header;