import React, { useState, useEffect } from 'react';

import './index.css';


// create a function to hold all character details
function Detail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
        //eslint-disable-next-line
    }, []);

    const [item, setItem] = useState([]);
// lookup async/await????
    const fetchItem = async () => {
        const data = await fetch(`https://www.breakingbadapi.com/api/characters/${match.params.id}`);

        const item = await data.json();
        // console.log(item);
        setItem(item);
    };
// async/await worked!!!
    
// return character image and details
    return (
        <div>
        {item.map(char => (
            <>
                <img src={char.img} alt='' />
                <h1>{char.name}</h1>
                <h2>{char.nickname}</h2>
                <ul>
                    <li>Status {char.status}</li>
                    <li>Birthday {char.birthday}</li>
                    <li>Occupation {char.occupation}</li>
                    <li>Portrayed by {char.portrayed}</li>
                    <li>Seasons {char.appearance}</li>
                </ul>
            </>    
        ))}
        </div>
    );
}


export default Detail