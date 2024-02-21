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
  const [filteredDogs, setFilteredDogs] = useState(allDogs); 
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    let filtered = allDogs;

    if (breed) {
      filtered = filtered.filter(dog => dog.breeds.toLowerCase().includes(breed.toLowerCase()));
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(dog => selectedSizes.includes(dog.size));
    }

    setFilteredDogs(filtered);
  }, [breed, selectedSizes, allDogs]);

  useEffect(() => {
    if (filteredDogs.length >  0) {
      setInitialLoad(false);
    }
  }, [filteredDogs]);

  function viewAllDogs() {
    setFilteredDogs(allDogs);
    setSelectedSizes([]); 
    setBreed('');
  }

  function renderDogsContainer() {
    if (error) {
      return <p className='error-msg'>{error}</p>
    };
    if (initialLoad) {
      return <p className='loading-msg'>Loading dogs...</p>
    };
    if (!filteredDogs.length) {
      return <p className='no-match-msg'>Sorry, there are no dogs that match! Try again.</p>
    } else {
      return <Dogs filteredDogs={filteredDogs} />
    }
  }

  return (
    <main className='home-container'>
      <Header viewAllDogs={viewAllDogs} />
      <div className='content-container'>
        <Filter 
          selectedSizes={selectedSizes} 
          setSelectedSizes={setSelectedSizes}
        />
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



// {error && (
//   // Display error message if there's an error
//   <p>{error}</p>
// )}

// {initialLoad && (
//   // Display loading message while fetching data
//   <p className='loading-msg'>Loading dogs...</p>
// )}

// {!initialLoad && !error && !filteredDogs.length && (
//   // Display message when there are no matching dogs
//   <p className='no-match-msg'>Sorry, there are no dogs that match! Try again.</p>
// )}

// {!initialLoad && !error && filteredDogs.length > 0 && (
//   // Render Dogs component if there are matching dogs
//   <Dogs filteredDogs={filteredDogs} />
// )}



export default Home;

Home.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
}

