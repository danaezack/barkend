import './DogCard.css';
import { Link } from 'react-router-dom'

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
  )
}

export default DogCard;