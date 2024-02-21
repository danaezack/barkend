import { Link } from 'react-router-dom'
import { dogShape } from '../../propTypes/dogShape';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import './Hero.css'

function Hero({ allDogs, setFilteredDogs}) {
  return (
    <>
      <Header allDogs={allDogs} setFilteredDogs={setFilteredDogs}/>
      <div className="hero">
        <div className="action">
          <h2 className="slogan">Where every dog finds their furever home.</h2>
          <Link to="/main">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero

Hero.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
  setFilteredDogs: PropTypes.func.isRequired,
}