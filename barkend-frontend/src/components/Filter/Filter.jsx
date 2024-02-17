import './Filter.css';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { useState } from 'react';

function Filter({ dogs, setDogs }) {
  const [size, setSize] = useState(null)

  const filterBySize = (event, size) => {
    event.preventDefault()
    const dogsBySize = sampleAnimals.filter(dog => dog.size === size);
    setDogs(dogsBySize)
  }
  
  if(dogs.length === 0) {
    return <p>Sorry, there are no dogs that match! Try again.</p>
  }

  return (
    <form>
      <select onChange={(event) => setSize(event.target.value) }>
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