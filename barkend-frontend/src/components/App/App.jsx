import { useState, useEffect } from 'react';
import './App.css';
import Home from '../Home/Home.jsx';
import Error from '../Error/Error.jsx';
import DogDetails from '../DogDetails/DogDetails.jsx';
import { Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero.jsx'
import getAllDogs from '../../apiCalls.js';

function App() {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    getAllDogs()
      .then(data => {
        console.log(data)
        setAllDogs(data.dogs)
      })
  }, [])

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero allDogs={allDogs}/>}/>
        <Route path='/main' element={<Home allDogs={allDogs} setAllDogs={setAllDogs} />}/>
        <Route path='/dog-details/:id' element={<DogDetails allDogs={allDogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
