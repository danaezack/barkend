import { useState } from 'react';
import './App.css';
import Dogs from '../Dogs/Dogs.js'
import DogDetails from '../DogDetails/DogDetails.jsx';
import { sampleAnimals } from '../../sampleDoggyData.js';

function App() {

  const [dogs, setDogs] = useState(sampleAnimals);

  return (
    <main className='App'>
      <DogDetails dogs={dogs}/>
      {/* <Dogs dogs={dogs} /> */}
    </main>
  );
}

export default App;
