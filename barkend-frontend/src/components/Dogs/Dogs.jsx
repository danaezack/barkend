import './Dogs.css';
import DogCard from '../DogCard/DogCard.jsx'

function Dogs({ dogs }) {

  return (
    <div className='dogs-container'>
      {dogs.map(dog => {
        return (
          <DogCard
            key={dog.id}
            name={dog.name}
            size={dog.size}
            breed={dog.breeds.primary}
          />
        )
      })}
    </div>
  )
}

export default Dogs;