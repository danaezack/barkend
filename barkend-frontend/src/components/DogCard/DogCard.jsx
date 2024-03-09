import './DogCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DogCard({ name, size, breed, id, photo, age, gender, fixed, kidFriendly }) {

  const getString = (category, value) => {
    if (category === 'fixed') {
      return (value ? "Fixed" : "Not Fixed")
    }
    if (category === 'kidFriendly') {
      if (value === true) {
        return 'Kid Friendly'
      }
      if (value === null) {
        return 'Kid Status Unknown'
      }
      if (value === false) {
        return 'Not Kid Friendly'
      }
    }
  }

  const fixedStatus = getString('fixed', fixed);
  const kidFriendlyStatus = getString('kidFriendly', kidFriendly);

  return (
    <Link className='card-link' to={`/dog-details/${id}`}>
      <div className='dog-card'>
        <img src={photo} alt={`${name} the ${breed}`}></img>
        <div className="dog-card-content">
          <h2>{name}</h2>
          <h3>{breed}</h3>
          <h3>{age} · {size}
            {/* · {gender} · {fixedStatus} · {kidFriendlyStatus} */}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default DogCard;

DogCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired
};


