import './Home.css';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';

function Home({ dogs, setDogs, sampleAnimals }) {
  
  return (
    <main className='home-container'>
      <Header setDogs={setDogs} sampleAnimals={sampleAnimals} />
      <div className='content-container'>
        <Filter setDogs={setDogs} sampleAnimals={sampleAnimals} />
        <div className='right-container'>
          <Search setDogs={setDogs} sampleAnimals={sampleAnimals} />
          {!dogs.length ? <p>Sorry, there are no dogs that match! Try again.</p> : <Dogs dogs={dogs} /> }
        </div>
      </div>
    </main>
  );
}

export default Home;