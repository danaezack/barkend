import './Home.css';
import Header from '../Header/Header.jsx';
import Filters from '../Filters/Filters.jsx';
import Dogs from '../Dogs/Dogs.jsx'

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