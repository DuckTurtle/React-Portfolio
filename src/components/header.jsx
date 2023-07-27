import React from 'react';
import Nav from "./nav.jsx"

function Header() {
   

    return (
        <nav className="navbar navbar-expand-lg d-flex row">
            <div className='container-fluid'>
                <h2 className='navbar-brand'> Quinton Schnell</h2>
                <Nav />
            </div>
        </nav>
    )
}

export default Header;