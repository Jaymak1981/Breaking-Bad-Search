import React, { useEffect, useState } from 'react';
// import Loading from './components/Loading';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import SearchHeader from './SearchHeader';


function App() {
  const searchOptions = {
    limit: 25, 
    api: 'https://www.breakingbadapi.com/api/',
    endpoint: '/characters'
  };

  const [images, setImages] = useState([]);

  const [searchString, setSearchString] = useState('search');

  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getImages(searchString);
    // eslint-disable-next-line
  }, []);

  function handleChange(event) {
    setSearchString(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  function getImages() {
    const searchString = 'Breaking Bad'
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setImages(response.data)
      setLastSearch(searchString);
      setSearchString('');
    })
    .catch(console.error);
  }

  return (
    <div>
      {/* <Loading /> */}
      <SearchHeader lastSearch={ lastSearch } />
      <SearchForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      searchString={searchString}
      />
      <SearchResults images={images}/>

    </div>
  );
}

export default App;
