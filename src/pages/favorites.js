import { useEffect, useState } from 'react';
import CardArticle from '../components/CardArticles/cardArticles';
import Header from '../components/Header/header';
import Pagination from '../components/Pagination/pagination';
import '../styles/main.css';

export default function Favorites() {

  const [favorite, setFavorite] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const favoriteLocalStorage = JSON.parse(localStorage.getItem('favorite')) || [];
    if (favoriteLocalStorage) {
      setFavorite(favoriteLocalStorage);
    }

  }, []);

  return (
    <div className='main'>
      <Header />
      <h1 className='title-favorite'>Favorites</h1>
      <main className='main-content'>
        {favorite.map((item, index) => (
          <CardArticle
            key={index}
            title={item.title}
            type={item._type}
            description={item.description}
            url={item.url}
            authors={item.authors}
          />
        ))}
      </main>
      <Pagination 
        className="pagination-favorite"
        totalCount={favorite.length - 1}
        currentPage={currentPage}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
