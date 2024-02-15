import './Dogs.css';
import DogCard from '../DogCard/DogCard.js'

function Dogs({ dogs }) {

  return (
    <div className='dogs-container'>
      <h2>Dogs go here!</h2>
      {dogs.map(dog => {
        return (
          <DogCard
            key={dog.id}
            name={dog.name}
          />
        )
      })}
    </div>
  )
}

export default Dogs;