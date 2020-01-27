import React from 'react';

function SearchHeader({ lastSearch }) {
    return (
        <header>
            <div className='brand'>
                {/* <img src={logo} alt='' /> */}
                <h1>Breaking Bad</h1>
            </div>
            <p className='muted'>
                Showing results for <strong>{lastSearch}</strong>
            </p>
        </header>
    );
}

export default SearchHeader;