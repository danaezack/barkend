import './Filter.css';
import { useState } from 'react';

function Filter({ setDogs, cleanAnimals }) {
  const [size, setSize] = useState('')

  const filterBySize = (event, size) => {
    event.preventDefault()
    const dogsBySize = cleanAnimals.filter(dog => dog.size === size);
    setDogs(dogsBySize)
    setSize('')
  }

  return (
    <form className ='filter-container'>
      <select className='dropdown' value={size} onChange={(event) => setSize(event.target.value) }>
        <option defaultValue>Choose size</option>
        <option value='Small'>Small</option>
        <option value='Medium'>Medium</option>
        <option value='Large'>Large</option>
      </select>
      <button className='filter-btn' type='submit' onClick={(event) => filterBySize(event, size)} >Select</button>
    </form>
  );
}

export default Filter;