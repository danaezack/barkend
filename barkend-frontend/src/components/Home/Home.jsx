import './Home.css';
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';
import Search from '../Search/Search.jsx';
import Dogs from '../Dogs/Dogs.jsx';

function Home({ dogs, setDogs }) {
  return (
    <>
      <Header />
      <Filter dogs={dogs} setDogs={setDogs} />
      <Search dogs={dogs} setDogs={setDogs} />
      <Dogs dogs={dogs} />
    </>
  );
}

export default Home;