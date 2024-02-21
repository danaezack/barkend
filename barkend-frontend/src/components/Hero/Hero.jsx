import './Hero.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

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