import { useState } from 'react';
import './App.css';
import Home from '../Home/Home.js';
import { sampleAnimals } from '../../sampleDoggyData.js';

function App() {

  const [dogs, setDogs] = useState(sampleAnimals);
  console.log(dogs);

  return (
    <main className='App'>
      <h1>BarkEnd</h1>
      <Home dogs={dogs} />
    </main>
  );
}

export default App;
