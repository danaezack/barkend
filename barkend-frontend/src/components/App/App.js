import { useState } from 'react';
import './App.css';
import Dogs from '../Dogs/Dogs.js'
import { sampleAnimals } from '../../sampleDoggyData.js';

function App() {

  const [dogs, setDogs] = useState(sampleAnimals);
  console.log(dogs);

  return (
    <main className='App'> 
      <h1>BarkEnd</h1>
      <Dogs/>
    </main>
  );
}

export default App;
