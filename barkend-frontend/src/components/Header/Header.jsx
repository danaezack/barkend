import './Header.css';
import { Link } from 'react-router-dom';

function Header({ setDogs, cleanAnimals }) {
  
  function viewAllDogs() {
    setDogs(cleanAnimals)
  }
  
  return (
    <header className='header'>
      <h1 className='page-title'>BarkEnd</h1>
      <div className='right-header'>
        <p className='welcome-msg'>Welcome, User</p>
        <nav className='nav-bar'>
          <Link to='/'>
            <button className='nav-btn'>Saved Dogs</button>
          </Link>
          <Link to='/'>
            <button className='nav-btn' onClick={viewAllDogs}>All Dogs</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
