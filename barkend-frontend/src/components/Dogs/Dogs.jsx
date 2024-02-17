import './Dogs.css';
import DogCard from '../DogCard/DogCard.jsx'

function Dogs({ dogs }) {

  return (
    <div className='dogs-container'>
      {dogs.map(dog => {
        return (
          <DogCard
            key={dog.id}
            id={dog.id}
            age={dog.age}
            name={dog.name}
            size={dog.size}
            breed={dog.breeds.primary}
            photo={dog.photos[0].medium}
          />
        )
      })}
    </div>
  )
}

export default Dogs;