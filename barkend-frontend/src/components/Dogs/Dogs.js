import './Dogs.css';
import DogCard from '../DogCard/DogCard.js'

function Dogs({ dogs }) {

  const dogCards = dogs.map(dog => {
    return (
      <DogCard
        key={dog.id}
        name={dog.name}
      />
    )
  })

  return (
    <div className='dogs-container'>
      <h2>Dogs go here!</h2>
      {dogCards}
    </div>
  )
}

export default Dogs;