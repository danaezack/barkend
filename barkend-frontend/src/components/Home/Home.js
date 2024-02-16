import './Home.css';
import Header from '../Header/Header.js';
import Filters from '../Filters/Filters.js';
import Dogs from '../Dogs/Dogs.js'

function Home({ dogs }) {
  return (
    <>
      <Header />
      <Dogs dogs={dogs} />
      {/* <Filters /> */}
    </>
  );
}

export default Home;