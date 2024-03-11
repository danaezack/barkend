import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero.jsx';
import Home from '../Home/Home.jsx';
import Error from '../Error/Error.jsx';
import DogDetails from '../DogDetails/DogDetails.jsx';
import getAllDogs from '../../apiCalls.js';
import Favorites from '../Favorites/Favorites.jsx';
import './App.css';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(false);

  // add function that changes favorite status of dog on click of heart button
  // add useEffect to filter for favorited dogs in allDogs on state change. set to setIsFavorite
  // 

  useEffect(() => {
    getAllDogs()
      .then(data => setAllDogs(data.dogs))
      .catch(error => setError(error.message))
  }, []);

  useEffect(() => {
    setFavorites(allDogs.filter(dog => dog.favorited === true))
  },[allDogs])


  function addFavorite(id) {
    console.log('hello');
    setAllDogs(prevDogs =>
      prevDogs.map(dog => {
        if (dog.id === id) {
          return {
            ...dog,
            favorited: !dog.favorited,
          };
        }
        return dog;
      })
    );
  }

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero allDogs={allDogs}/>}/>
        <Route path='/main' element={<Home allDogs={allDogs} setAllDogs={setAllDogs} error={error}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails addFavorite={addFavorite} allDogs={allDogs}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites} />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
