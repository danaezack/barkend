import './Home.css';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';

function Home({ dogs, setDogs, cleanAnimals }) {
  
  return (
    <main className='home-container'>
      <Header setDogs={setDogs} cleanAnimals={cleanAnimals} />
      <div className='content-container'>
        <Filter setDogs={setDogs} cleanAnimals={cleanAnimals} />
        <div className='right-container'>
          <Search setDogs={setDogs} cleanAnimals={cleanAnimals} />
          {!dogs.length ? <p>Sorry, there are no dogs that match! Try again.</p> : <Dogs dogs={dogs} /> }
        </div>
      </div>
    </main>
  );
}

export default Home;