import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ viewAllDogs }) {
  return (
    <header className="header">
      <Link to="/" className="page-title-link">
        <h1 className="page-title">BarkEnd</h1>
      </Link>
      <div className="right-header">
        <nav className="nav-bar">
          <NavLink to="/favorites" activeClassName="active">
            <button className="nav-btn saved-dogs-btn">Saved Dogs</button>
          </NavLink>
          <Link to="/main">
            <button className="nav-btn all-dogs-btn" onClick={viewAllDogs}>
              All Dogs
            </button>
          </Link>
        </nav>
        {/* <p className='welcome-msg'>Welcome, User</p> */}
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  viewAllDogs: PropTypes.func.isRequired,
};
