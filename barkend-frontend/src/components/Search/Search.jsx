import './Search.css';
import { useState } from 'react';

function Search({ setBreed }) {
  const [breedValue, setBreedValue] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setBreed(breedValue);
    setBreedValue(''); 
  };

  return (
    <form className='search-container' onSubmit={handleSearchSubmit}>
      <input
        className='search-input'
        type='text'
        placeholder='Search by breed keyword...'
        value={breedValue}
        name='breed-search'
        onChange={event => setBreedValue(event.target.value)}
      />
      <button className='search-btn' type='submit'>Search</button>
    </form>
  );
}

export default Search;
