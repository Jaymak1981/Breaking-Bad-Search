import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// create navigation to navigate through pages

function Nav() {
    return (
        <nav>
            <h1>Breaking Bad</h1>
            <h2>
                <Link className='nav-links' to='/Home'>
                    <li>Home</li>
                </Link>
            </h2>
        </nav>
    );
}

export default Nav;