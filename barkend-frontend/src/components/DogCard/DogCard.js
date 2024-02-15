import './DogCard.css';

function DogCard({ name }) {
  return (
    <div className='dog-card'>
      <h3>{name}</h3>
    </div>
  )
}

export default DogCard;