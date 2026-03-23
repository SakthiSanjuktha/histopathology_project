import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>🔬</span>
          Histopathology AI
        </Link>
        <ul className="navbar-nav">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/dataset" className={`nav-link ${isActive('/dataset')}`}>Dataset</Link></li>
          <li><Link to="/model" className={`nav-link ${isActive('/model')}`}>Model</Link></li>
          <li><Link to="/prediction" className={`nav-link ${isActive('/prediction')}`}>Prediction</Link></li>
          <li><Link to="/results" className={`nav-link ${isActive('/results')}`}>Results</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
