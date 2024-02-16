import './DogCard.css';

function DogCard({ name, size, breed }) {
  return (
    <div className='dog-card'>
      <h2>{name}</h2>
      <h3>{size}</h3>
      <h3>{breed}</h3>
      <h3> --------- </h3>
    </div>
  )
}

export default DogCard;