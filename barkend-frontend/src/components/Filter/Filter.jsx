import {PropTypes, string} from 'prop-types';
import './Filter.css';

function Filter({ selectedSizes, setSelectedSizes }) {
  const handleSizeToggle = (size) => {
    setSelectedSizes(prevSizes => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter(prevSize => prevSize !== size);
      } else {
       
        return [...prevSizes, size];
      }
    });
  };

  return (
    <div className='filter-container'>
      <h2>Filter By:</h2>
      <div className='size-toggle-buttons'>
        <button
          className={`size-toggle-btn small-btn ${selectedSizes.includes('Small') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Small')}
        >
          Small
        </button>
        <button
          className={`size-toggle-btn medium-btn ${selectedSizes.includes('Medium') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Medium')}
        >
          Medium
        </button>
        <button
          className={`size-toggle-btn large-btn ${selectedSizes.includes('Large') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Large')}
        >
          Large
        </button>
      </div>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  selectedSizes: PropTypes.arrayOf(string).isRequired,
  setSelectedSizes: PropTypes.func.isRequired
}