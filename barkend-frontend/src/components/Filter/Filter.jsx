import './Filter.css';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { useState } from 'react';

function Filter({ setDogs }) {
  const [size, setSize] = useState('')

  const filterBySize = (event, size) => {
    event.preventDefault()
    const dogsBySize = sampleAnimals.filter(dog => dog.size === size);
    setDogs(dogsBySize)
    setSize('')
  }

  return (
    <form>
      <select value={size} onChange={(event) => setSize(event.target.value) }>
        <option defaultValue>Choose size</option>
        <option value='Small'>Small</option>
        <option value='Medium'>Medium</option>
        <option value='Large'>Large</option>
      </select>
      <button type='submit' onClick={(event) => filterBySize(event, size)} className='submit'>Select</button>
    </form>
  );
}

export default Filter;