import {PropTypes, bool, string} from 'prop-types';
import './Filter.css';

function Filter({ selectedSizes, setSelectedSizes, selectedAges, setSelectedAges, gender, setGender, fixed, setFixed, kidFriendly, setKidFriendly }) {

  const handleToggle = (category, selected) => {
    if (category === 'size') {
      setSelectedSizes(prevSizes => {
        if (prevSizes.includes(selected)) {
          return prevSizes.filter(prevSize => prevSize !== selected);
        } else {
          return [...prevSizes, selected];
        }
      })
    }
    if (category === 'age') {
      setSelectedAges(prevAges => {
        if (prevAges.includes(selected)) {
          return prevAges.filter(prevAge => prevAge !== selected);
        } else {
          return [...prevAges, selected];
        }
      });
    }
    if (category === 'gender') {
      setGender(prevGender => {
        if (prevGender.includes(selected)) {
          return prevGender.filter(prevGender => prevGender !== selected);
        } else {
          return [...prevGender, selected];
        }
      });
    }
    if (category === 'fixed') {
      setFixed(prevFixed => {
        if (prevFixed.includes(selected)) {
          return prevFixed.filter(prevFixed => prevFixed !== selected);
        } else {
          return [...prevFixed, selected];
        }
      });
    }
    if (category === 'kidFriendly') {
      setKidFriendly(prevKidFriendly => {
        if (prevKidFriendly.includes(selected)) {
          return prevKidFriendly.filter(prevKidFriendly => prevKidFriendly !== selected);
        } else {
          return [...prevKidFriendly, selected];
        }
      });
    }
  }

  return (
    <aside className='filter-container'>
      <section className='size-filter-container'>
        <h2>Size</h2>
        <div className='toggle-buttons'>
          <button
            className={`toggle-btn ${selectedSizes.includes('Small') && 'active'}`}
            onClick={() => handleToggle('size', 'Small')}
          >
            Small
          </button>
          <button
            className={`toggle-btn ${selectedSizes.includes('Medium') && 'active'}`}
            onClick={() => handleToggle('size', 'Medium')}
          >
            Medium
          </button>
          <button
            className={`toggle-btn ${selectedSizes.includes('Large') && 'active'}`}
            onClick={() => handleToggle('size', 'Large')}
          >
            Large
          </button>
        </div>
      </section>
      <section className='age-filter-container'>
        <h2>Age</h2>
        <div className='toggle-buttons'>
          <button
            className={`toggle-btn ${selectedAges.includes('Baby') && 'active'}`}
            onClick={() => handleToggle('age', 'Baby')}
          >
            Baby
          </button>
          <button
            className={`toggle-btn ${selectedAges.includes('Young') && 'active'}`}
            onClick={() => handleToggle('age', 'Young')}
          >
            Young
          </button>
          <button
            className={`toggle-btn ${selectedAges.includes('Adult') && 'active'}`}
            onClick={() => handleToggle('age', 'Adult')}
          >
            Adult
          </button>
        </div>
      </section>
      <section className='gender-filter-container'>
        <h2>Gender</h2>
        <div className='toggle-buttons'>
          <button
            className={`toggle-btn ${gender.includes('Female') && 'active'}`}
            onClick={() => handleToggle('gender', 'Female')}
          >
            Female
          </button>
          <button
            className={`toggle-btn ${gender.includes('Male') && 'active'}`}
            onClick={() => handleToggle('gender', 'Male')}
          >
            Male
          </button>
        </div>
      </section>
      <section className='fixed-filter-container'>
        <h2>Spayed/Neutered:</h2>
        <div className='toggle-buttons'>
          <button
            className={`toggle-btn ${fixed.includes(true) && 'active'}`}
            onClick={() => handleToggle('fixed', true)}
          >
            Fixed
          </button>
          <button
            className={`toggle-btn ${fixed.includes(false) && 'active'}`}
            onClick={() => handleToggle('fixed', false)}
          >
            Not Fixed
          </button>
        </div>
      </section>
      <section className='kidfriendly-filter-container'>
        <h2>Kid Friendly</h2>
        <div className='toggle-buttons'>
          <button
            className={`toggle-btn ${kidFriendly.includes(true) && 'active'}`}
            onClick={() => handleToggle('kidFriendly', true)}
          >
            Yes
          </button>
          <button
            className={`toggle-btn ${kidFriendly.includes(null) && 'active'}`}
            onClick={() => handleToggle('kidFriendly', null)}
          >
            Maybe
          </button>
          <button
            className={`toggle-btn ${kidFriendly.includes(false) && 'active'}`}
            onClick={() => handleToggle('kidFriendly', false)}
          >
            No
          </button>
        </div>
      </section>
    </aside>
  );
}

export default Filter;

Filter.propTypes = {
  selectedSizes: PropTypes.arrayOf(string).isRequired,
  setSelectedSizes: PropTypes.func.isRequired,
  selectedAges: PropTypes.arrayOf(string).isRequired,
  setSelectedAges: PropTypes.func.isRequired,
  gender: PropTypes.arrayOf(string).isRequired,
  setGender: PropTypes.func.isRequired,
  fixed: PropTypes.arrayOf(bool).isRequired,
  setFixed: PropTypes.func.isRequired,
  kidFriendly: PropTypes.arrayOf(bool).isRequired,
  setKidFriendly: PropTypes.func.isRequired
}