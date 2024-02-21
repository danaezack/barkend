import './Search.css';
import { useState } from 'react'

function Search({ setAllDogs, allDogs }) {
  const [breed, setBreed] = useState('');

  const searchByBreed = (event, breed) => {
    event.preventDefault();
    const dogsByBreed = allDogs.filter(dog => {
      return dog.breeds.toLowerCase().includes(breed.toLowerCase());
    });
    setAllDogs(dogsByBreed);
    setBreed('')
  }

  return (
    <form className ='search-container'>
      <input className='search-input'
      type='text'
      placeholder='Search by breed keyword...'
      name='breed-search'
      value={breed}
      onChange={event => setBreed(event.target.value)}
      />
      <button className='search-btn' onClick={event => searchByBreed(event, breed)}>Search</button>
    </form>
  );
}

export default Search;