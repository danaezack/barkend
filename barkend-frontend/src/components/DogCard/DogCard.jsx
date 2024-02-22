import './DogCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DogCard({ name, size, breed, id, photo, age }) {
  return (
    <Link className='card-link' to={`/dog-details/${id}`}>
      <div className='dog-card'>
        <img src={photo} alt={`${name} the ${breed}`}></img>
        <h2>{name}</h2>
        <h3>{breed}</h3>
        <h4>{age} · {size}</h4>
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
};


