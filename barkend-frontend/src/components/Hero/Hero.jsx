import { Link } from 'react-router-dom';
import { dogShape } from '../../propTypes/dogShape';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import './Hero.css';

function Hero() {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="action">
          <h2 className="slogan">Where every dog finds their furever home.</h2>
          <Link to="/main">
            <button className='get-started-btn'>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;