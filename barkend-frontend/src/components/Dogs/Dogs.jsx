import { dogShape } from '../../propTypes/dogShape.js';
import DogCard from '../DogCard/DogCard.jsx';
import PropTypes from 'prop-types';
import './Dogs.css';

function Dogs({ filteredDogs, currentPage, setCurrentPage }) {
  const dogsPerPage = 16;
 
  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);
 
  const currentDogs = filteredDogs.slice(
      (currentPage - 1) * dogsPerPage,
      currentPage * dogsPerPage
  );
 
  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  const renderPaginationControls = () => {
      return (
        <div className="button-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      );
  };
 
  const startDog = (currentPage - 1) * dogsPerPage + 1;
  const endDog = Math.min(currentPage * dogsPerPage, filteredDogs.length);
 
  return (
     <div className='dogs-container'>
       <div className='cards-container'>
         {currentDogs.map(dog => (
           <DogCard
             key={dog.id}
             id={dog.id}
             age={dog.age}
             name={dog.name}
             size={dog.size}
             breed={dog.breeds}
             gender={dog.gender}
             fixed={dog.attributes.spayed_neutered}
             kidFriendly={dog.environment.children}
             photo={dog.photos[0]}
           />
         ))}
       </div>
       <div className="pagination-controls">
         <div className="button-container">
           {renderPaginationControls()}
         </div>
         <p>Showing dogs {startDog}-{endDog}</p>
       </div>
     </div>
  );
 }
 
 export default Dogs;
 
 Dogs.propTypes = {
  filteredDogs: PropTypes.arrayOf(dogShape).isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
 };
 
 Dogs.defaultProps = {
  filteredDogs: []
 };
