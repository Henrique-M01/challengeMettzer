import { useEffect, useState } from 'react';

export default function CardArticles({title, type, description, url, authors}) {

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    favorite.forEach((item) => {
      if (item.title === title && item.type === type) {
        setChecked(true);
      }
    });
  }, [title, type]);
  const setFavoriteLocalStorage = () => {
      const favoriteArticle = {
        title,
        type,
        description,
        url,
        authors,
      };
  
      const favorite = JSON.parse(localStorage.getItem('favorite'));
  
      if (!favorite) {
        localStorage.setItem('favorite', JSON.stringify([favoriteArticle]));
      };
    
      if (favorite) {
        const favoriteExist = favorite.find((item) => item.title === title);
        if (!favoriteExist) {
          localStorage.setItem('favorite', 
          JSON.stringify([favoriteArticle, ...favorite]));
        };
        };
    };

    const removeFavoriteLocalStorage = () => {
      const favorite = JSON.parse(localStorage.getItem('favorite'));
      const favoriteFilter = favorite.filter((item) => item.title !== title);
      localStorage.setItem('favorite', JSON.stringify(favoriteFilter));
    };

  return (
    <div>
      <h1>{ title }</h1>
      <h3>{ type }</h3>
      <h4>{ authors[0] }</h4>
      <p>{ description }</p>
      {
        url.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noreferrer">Link</a>))
      }
      <input
        type="checkbox"
        id="heart"
        checked={checked}
        onChange={({ target }) => {
          setChecked(target.checked);
          if (target.checked) {
            setFavoriteLocalStorage();
          } else {
            removeFavoriteLocalStorage();
          }
        }}
      />
    </div>
  );
}
