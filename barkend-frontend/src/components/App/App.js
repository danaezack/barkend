import { useState } from 'react';
import './App.css';
import Home from '../Home/Home.jsx';
// import Dogs from '../Dogs/Dogs.js'
// import DogDetails from '../DogDetails/DogDetails.jsx';
import { sampleAnimals } from '../../sampleDoggyData.js';

function App() {

  const [dogs, setDogs] = useState(sampleAnimals);
  console.log(dogs)
  return (
    <main className='App'>
      <Home dogs={dogs} setDogs={setDogs} />
    </main>
  );
}

export default App;
