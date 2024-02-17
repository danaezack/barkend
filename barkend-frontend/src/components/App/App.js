import { useState } from 'react';
import './App.css';
import Home from '../Home/Home.jsx';

import Error from '../Error/Error.jsx';
// import Dogs from '../Dogs/Dogs.jsx'
import DogDetails from '../DogDetails/DogDetails.jsx';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  const cleanAnimals = sampleAnimals.filter(dog => {
    return dog.photos.length;
  })

  const [dogs, setDogs] = useState(cleanAnimals);

  console.log(cleanAnimals)

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home dogs={dogs} setDogs={setDogs} cleanAnimals={cleanAnimals}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails dogs={dogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
