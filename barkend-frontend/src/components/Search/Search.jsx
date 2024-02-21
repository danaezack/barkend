import './Search.css';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { useState } from 'react'

function Search({ setDogs, sampleAnimals }) {
  const [breed, setBreed] = useState('');

  const searchByBreed = (event, breed) => {
    event.preventDefault();
    const dogsByBreed = sampleAnimals.filter(dog => {
      return dog.breeds.primary.toLowerCase().includes(breed.toLowerCase());
    });
    setDogs(dogsByBreed);
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