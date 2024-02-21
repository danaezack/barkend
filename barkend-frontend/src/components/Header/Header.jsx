import './Header.css';
import { Link } from 'react-router-dom';

function Header({ viewAllDogs }) {

  
  return (
    <header className='header'>
      <Link to='/' > 
        <h1 className='page-title'>BarkEnd</h1>
      </Link>
      <div className='right-header'>
        <nav className='nav-bar'>
          <Link to=''>
            <button className='nav-btn saved-dogs-btn'>Saved Dogs</button>
          </Link>
          <Link to='/main'>
            <button className='nav-btn all-dogs-btn' onClick={viewAllDogs}>All Dogs</button>
          </Link>
        </nav>
        <p className='welcome-msg'>Welcome, User</p>
      </div>
    </header>
  );
}

export default Header;
