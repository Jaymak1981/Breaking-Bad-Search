import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

// create a home function to list all characters and image limiting it to 10
function Home() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.breakingbadapi.com/api/characters?limit=10');

        const items = await data.json();
        // console.log(items);
        setItems(items);
    };

    return (
        <div class='grid-container'>
            <ul>
                {items.map(item => (
                    <Link to={`/Home/${item.char_id}`}>
                        <li key={item.char_id} className='char'>
                            <img src={item.img} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}


export default Home;