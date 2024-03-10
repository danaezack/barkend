import { dogShape } from '../../propTypes/dogShape.js';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';
import PropTypes from 'prop-types';
import './Home.css';

function Home({ allDogs, error }) {
  const [breed, setBreed] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [gender, setGender] = useState([]);
  const [fixed, setFixed] = useState([]);
  const [kidFriendly, setKidFriendly] = useState([])
  const [filteredDogs, setFilteredDogs] = useState(allDogs); 
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    let filtered = allDogs;

    if (breed) {
      filtered = filtered.filter(dog => dog.breeds.toLowerCase().includes(breed.toLowerCase()));
    }
    if (selectedSizes.length) {
      filtered = filtered.filter(dog => selectedSizes.includes(dog.size));
    }
    if (selectedAges.length) {
      filtered = filtered.filter(dog => selectedAges.includes(dog.age));
    }
    if (gender.length) {
      filtered = filtered.filter(dog => gender.includes(dog.gender));
    }
    if (fixed.length) {
      filtered = filtered.filter(dog => fixed.includes(dog.attributes.spayed_neutered));
    }
    if (kidFriendly.length) {
      filtered = filtered.filter(dog => kidFriendly.includes(dog.environment.children));
    }

    setFilteredDogs(filtered);
  }, [breed, selectedSizes, selectedAges, gender, fixed, kidFriendly, allDogs]);

  useEffect(() => {
    if (filteredDogs.length) {
      setInitialLoad(false);
    }
  }, [filteredDogs]);

  function viewAllDogs() {
    setFilteredDogs(allDogs);
    setBreed('');
    setSelectedSizes([]); 
    setSelectedAges([]);
    setGender([]);
    setFixed([]);
  }

  function renderDogsContainer() {
    if (error) {
      return <p className='error-msg'>{error}</p>;
    };
    if (initialLoad) {
      return <p className='loading-msg'>Loading dogs...</p>;
    };
    if (!filteredDogs.length) {
      return <p className='no-match-msg'>Sorry, there are no dogs that match! Try again.</p>;
    } else {
      return <Dogs filteredDogs={filteredDogs} />;
    }
  }

  return (
    <main className='home-container'>
      <Header viewAllDogs={viewAllDogs} />
      <div className='content-container'>
      <div className="filter-container">
        <Filter 
          selectedSizes={selectedSizes} 
          setSelectedSizes={setSelectedSizes}
          selectedAges={selectedAges}
          setSelectedAges={setSelectedAges}
          gender={gender}
          setGender={setGender}
          fixed={fixed}
          setFixed={setFixed}
          kidFriendly={kidFriendly}
          setKidFriendly={setKidFriendly}
        />
        </div>
        <div className='right-container'>
          <Search 
            setBreed={setBreed}
          />
        {renderDogsContainer()}
        </div>
      </div>
    </main>
  );
}

export default Home;

Home.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
  error: PropTypes.string
};

Home.defaultProps = {
  error: null
};