import { Link } from 'react-router-dom';
import { dogShape } from '../../propTypes/dogShape';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ setFilteredDogs, allDogs }) {
  
  function viewAllDogs() {
    setFilteredDogs(allDogs)
  }
  
  return (
    <header className='header'>
      <Link to='/' > 
        <h1 className='page-title'>BarkEnd</h1>
      </Link>
      <div className='right-header'>
        <nav className='nav-bar'>
          <Link to=''>
            <button className='nav-btn hidden'>Saved Dogs</button>
          </Link>
          <Link to='/main'>
            <button className='nav-btn' onClick={viewAllDogs}>All Dogs</button>
          </Link>
        </nav>
        <p className='welcome-msg'>Welcome, User</p>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
  setFilteredDogs: PropTypes.func.isRequired,
}