import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero.jsx';
import Home from '../Home/Home.jsx';
import Error from '../Error/Error.jsx';
import DogDetails from '../DogDetails/DogDetails.jsx';
import getAllDogs from '../../apiCalls.js';
import './App.css';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDogs()
      .then(data => setAllDogs(data.dogs))
      .catch(error => setError(error.message))
  }, []);

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero allDogs={allDogs}/>}/>
        <Route path='/main' element={<Home allDogs={allDogs} setAllDogs={setAllDogs} error={error}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails allDogs={allDogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
