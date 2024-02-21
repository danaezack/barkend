import './Header.css';
import { Link } from 'react-router-dom';

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
        <p className='welcome-msg'>Welcome, User</p>
        <nav className='nav-bar'>
          <Link to=''>
            <button className='nav-btn saved-dogs-btn'>Saved Dogs</button>
          </Link>
          <Link to='/main'>
            <button className='nav-btn all-dogs-btn' onClick={viewAllDogs}>All Dogs</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
