import { Link } from 'react-router-dom';

function Header({currentPage}) {
  return (
    <header>
      <h1>Scientific Articles</h1>
      {
        currentPage === 'home' ? 
          <Link to="/favorites">Favorites</Link> :
          <Link to="/">Home</Link>
      }
    </header>
  );
}

export default Header;
