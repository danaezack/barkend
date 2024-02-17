import './Home.css';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';

function Home({ dogs, setDogs }) {
  
  return (
    <>
      <Header setDogs={setDogs}/>
      <Filter setDogs={setDogs} />
      <Search setDogs={setDogs} />
      {!dogs.length ? <p>Sorry, there are no dogs that match! Try again.</p> : <Dogs dogs={dogs} /> }
    </>
  );
}

export default Home;