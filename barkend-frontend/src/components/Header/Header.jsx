import './Header.css';
import { sampleAnimals } from '../../sampleDoggyData.js';

function Header({ setDogs }) {
  
  function viewAllDogs() {
    setDogs(sampleAnimals)
  }
  
  return (
    <header className='header'>
      <h1>BarkEnd</h1>
      <nav>
        <button>View Saved Doggos</button>
        <button onClick={viewAllDogs}>View All Doggos</button>
      </nav>
    </header>
  );
}

export default Header;
