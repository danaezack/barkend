import "./Favorites.css"
import Header from "../Header/Header";
import DogCard from "../DogCard/DogCard";

function Favorites({ favorites }) {
  return (
    <>
      <Header />
      <div className="favorites-container">
        {favorites.map(dog => (
           <DogCard
             key={dog.id}
             id={dog.id}
             age={dog.age}
             name={dog.name}
             size={dog.size}
             breed={dog.breeds}
             gender={dog.gender}
             fixed={dog.attributes.spayed_neutered}
             kidFriendly={dog.environment.children}
             photo={dog.photos[0]}
           />
         ))}
      </div>
    </>
  )
}

export default Favorites;