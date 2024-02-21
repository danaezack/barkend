import { useState } from 'react';
import './App.css';
import Home from '../Home/Home.jsx';
import Error from '../Error/Error.jsx';
import DogDetails from '../DogDetails/DogDetails.jsx';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { Routes, Route } from 'react-router-dom';
import Hero  from '../HeroBanner/Hero.jsx'

function App() {
  
  const cleanAnimals = sampleAnimals.filter(dog => {
    return dog.photos.length;
  })

  const [dogs, setDogs] = useState(cleanAnimals);

  console.log(cleanAnimals)

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero setDogs={setDogs} cleanAnimals={cleanAnimals}/>}/>
        <Route path='/main' element={<Home dogs={dogs} setDogs={setDogs} cleanAnimals={cleanAnimals}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails dogs={dogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
