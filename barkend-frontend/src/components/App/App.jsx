import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero.jsx'
import Home from '../Home/Home.jsx';
import Error from '../Error/Error.jsx';
import DogDetails from '../DogDetails/DogDetails.jsx';
import getAllDogs from '../../apiCalls.js';
import './App.css';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);

  useEffect(() => {
    getAllDogs()
      .then(data => {
        console.log(data)
        setAllDogs(data.dogs)
        setFilteredDogs(data.dogs);
      })
  }, [])

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero setFilteredDogs={setFilteredDogs} allDogs={allDogs}/>}/>
        <Route path='/main' element={<Home allDogs={allDogs} setAllDogs={setAllDogs} setFilteredDogs={setFilteredDogs} filteredDogs={filteredDogs}/>}/>
        <Route path='/dog-details/:id' element={<DogDetails allDogs={allDogs}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default App;
