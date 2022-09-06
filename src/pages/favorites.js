import { useEffect, useState } from 'react';
import CardArticle from '../components/CardArticles/cardArticles';
import Header from '../components/Header/header';

export default function Favorites() {

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const favoriteLocalStorage = JSON.parse(localStorage.getItem('favorite')) || [];
    if (favoriteLocalStorage) {
      setFavorite(favoriteLocalStorage);
    }

  }, [favorite]);

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
        />))}
    </div>
  )
}
