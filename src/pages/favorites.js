import { useEffect, useState } from 'react';
import CardArticle from '../components/CardArticles/cardArticles';
import Header from '../components/Header/header';
import Pagination from '../components/Pagination/pagination';

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
    <div>
      <Header />
      <h1>Favorites</h1>
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
