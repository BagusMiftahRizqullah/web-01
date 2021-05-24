import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navContainer">

            <div className='logo'>
                <h3>Portofolio</h3>
            </div>

            <div className='navigation'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Project</a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
                <div style={{ left: 24 }} className='line'></div>
            </div>

            <div className='humberger'>
                <a hrev='/'>
                    <i class='fas fa-bars'></i>
                </a>
            </div>
        </div>
    );
}
