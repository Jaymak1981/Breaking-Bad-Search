import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logo from './breaking-bad-logo.svg';

// create navigation to navigate through pages

function Header() {
    return (
        <nav>
            <header>
            <div className='brand'>
                <img src={logo} alt='' />
                <h1>Breaking Bad</h1>
            </div>
            </header>
            <h2>
                <Link className='link' to='/Home'>
                    <li>Home</li>
                </Link>
            </h2>
        </nav>
    );
}

export default Header;