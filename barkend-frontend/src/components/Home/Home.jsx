import './Home.css';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';

function Home({ allDogs, setAllDogs, setFilteredDogs, filteredDogs }) {
  
  return (
    <main className='home-container'>
      <Header setAllDogs={setAllDogs} allDogs={allDogs} />
      <div className='content-container'>
        <Filter allDogs={allDogs} setFilteredDogs={setFilteredDogs} filteredDogs={filteredDogs}/>
        <div className='right-container'>
          <Search setAllDogs={setAllDogs} allDogs={allDogs} setFilteredDogs={setFilteredDogs} filteredDogs={filteredDogs} />
          {!allDogs.length ? <p>Sorry, there are no dogs that match! Try again.</p> : <Dogs filteredDogs={filteredDogs} allDogs={allDogs} /> }
        </div>
      </div>
    </main>
  );
}

export default Home;