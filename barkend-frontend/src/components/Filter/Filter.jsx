import './Filter.css';
import { useState, useEffect } from 'react';

function Filter({ setDogs, sampleAnimals }) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    setSelectedSizes(prevSizes => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter(prevSize => prevSize !== size)
      } else {
        return [...prevSizes, size];
      }
    });
    filterBySize();
  }

  const filterBySize = () => {
    if (selectedSizes.length ===  0) {
      setDogs(sampleAnimals);
    } else {
      const dogsBySize = sampleAnimals.filter(dog => selectedSizes.includes(dog.size));
      setDogs(dogsBySize);
    }
  };

  useEffect(() => {
    filterBySize();
  }, [selectedSizes]);


  return (
    <div className ='filter-container'>
      <div className='size-toggle-buttons'>
      <button
          className={`size-toggle-btn ${selectedSizes.includes('Small') && 'active'}`}
          onClick={() => handleSizeToggle('Small')}
        >
          Small
        </button>
        <button
          className={`size-toggle-btn ${selectedSizes.includes('Medium') && 'active'}`}
          onClick={() => handleSizeToggle('Medium')}
        >
          Medium
        </button>
        <button
          className={`size-toggle-btn ${selectedSizes.includes('Large') && 'active'}`}
          onClick={() => handleSizeToggle('Large')}
        >
          Large
        </button>
        </div>
    </div>
  );
}

export default Filter;