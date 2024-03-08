import { dogShape } from '../../propTypes/dogShape.js';
import DogCard from '../DogCard/DogCard.jsx';
import PropTypes from 'prop-types';
import './Dogs.css';

function Dogs({ filteredDogs }) {
  return (
    <div className='dogs-container'>
      {filteredDogs.map(dog => {
        return (
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
        )
      })}
    </div>
  );
}

export default Dogs;

Dogs.propTypes = {
  filteredDogs: PropTypes.arrayOf(dogShape).isRequired,
};

Dogs.defaultProps = {
  filteredDogs: []
};