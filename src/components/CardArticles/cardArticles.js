import { useEffect, useState } from 'react';
import './cardArticle.css';

export default function CardArticles({title, type, description, url, authors}) {

  const [checked, setChecked] = useState(false);
  const [authorFilter, setAuthorFilter] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    
    const authorsFiltered = authors.filter((author, index) => (
      authors.indexOf(author) === index
    ));

    setAuthorFilter(authorsFiltered);

    favorite.forEach((item) => {
      if (item.title === title && item.type === type) {
        setChecked(true);
      }
    });
  }, [title, type, authors]);
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
    <div className='card-article'>
      <h1 className='card-title'>{ title }</h1>
      <h3>Type: { type }</h3>
      <h3>
        Authors:
      { 
        authorFilter.map((author, index) => (
          <p key={index} >{ author }</p> )) 
      }
      </h3>
      <p className='card-description'><b>Description</b>: { description }</p>
      {
        url.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noreferrer"
            className='card-link'
          >
            Visit the project
          </a>))
      }
      <label htmlFor='checkbox' className='favorite-checkbox'>
        Favorite: 
        <input
          type="checkbox"
          id="checkbox"
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
      </label>
    </div>
  );
}
