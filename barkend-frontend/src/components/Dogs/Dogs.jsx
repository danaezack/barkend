import './Dogs.css';
import DogCard from '../DogCard/DogCard.jsx'

function Dogs({ filteredDogs, allDogs }) {

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
            photo={dog.photos[0]}
          />
        )
      })}
    </div>
  )
}

export default Dogs;