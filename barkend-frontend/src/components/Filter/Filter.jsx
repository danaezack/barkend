import './Filter.css';
import { useState, useEffect } from 'react';

function Filter({ setAllDogs, allDogs, setFilteredDogs, filteredDogs }) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    setSelectedSizes(prevSizes => {
      if (prevSizes.includes(size)) {
        // If the size is already selected, remove it from the array
        return prevSizes.filter(prevSize => prevSize !== size);
      } else {
        // If the size is not selected, add it to the array
        return [...prevSizes, size];
      }
    });
  };

  const filterBySize = () => {
    if (selectedSizes.length ===   0) {
      setFilteredDogs(allDogs);
    } else {
      const dogsBySize = allDogs.filter(dog => selectedSizes.includes(dog.size));
      setFilteredDogs(dogsBySize);
    }
  };

  useEffect(() => {
    filterBySize();
  }, [selectedSizes]);

  return (
    <div className='filter-container'>
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