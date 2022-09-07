import { Link } from 'react-router-dom';
import './header.css';

function Header({currentPage}) {
  return (
    <header className='header-container'>
      <h1>Scientific Articles</h1>
      {
        currentPage === 'home' ? 
          <Link className='btn-navigation' to="/favorites">Favorites</Link> :
          <Link className='btn-navigation' to="/">Home</Link>
      }
    </header>
  );
}

export default Header;
