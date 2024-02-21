import { useState } from 'react';
import './App.css';
import Home from '../Home/Home.jsx';

import Error from '../Error/Error.jsx';
// import Dogs from '../Dogs/Dogs.jsx'
import DogDetails from '../DogDetails/DogDetails.jsx';
import { sampleAnimals } from '../../sampleDoggyData.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  

  const [dogs, setDogs] = useState(sampleAnimals);



  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home dogs={dogs} setDogs={setDogs} sampleAnimals={sampleAnimals}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails dogs={dogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
